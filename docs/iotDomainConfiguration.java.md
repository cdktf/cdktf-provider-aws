# `iotDomainConfiguration` Submodule <a name="`iotDomainConfiguration` Submodule" id="@cdktf/provider-aws.iotDomainConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotDomainConfiguration <a name="IotDomainConfiguration" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration aws_iot_domain_configuration}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_domain_configuration.IotDomainConfiguration;

IotDomainConfiguration.Builder.create(Construct scope, java.lang.String id)
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
    .name(java.lang.String)
//  .authorizerConfig(IotDomainConfigurationAuthorizerConfig)
//  .domainName(java.lang.String)
//  .id(java.lang.String)
//  .serverCertificateArns(java.util.List<java.lang.String>)
//  .serviceType(java.lang.String)
//  .status(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .tlsConfig(IotDomainConfigurationTlsConfig)
//  .validationCertificateArn(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#name IotDomainConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.authorizerConfig">authorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | authorizer_config block. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#id IotDomainConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.serverCertificateArns">serverCertificateArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.serviceType">serviceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#status IotDomainConfiguration#status}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#tags_all IotDomainConfiguration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.validationCertificateArn">validationCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#name IotDomainConfiguration#name}.

---

##### `authorizerConfig`<sup>Optional</sup> <a name="authorizerConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.authorizerConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

authorizer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#authorizer_config IotDomainConfiguration#authorizer_config}

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#id IotDomainConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serverCertificateArns`<sup>Optional</sup> <a name="serverCertificateArns" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.serverCertificateArns"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}.

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.serviceType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#status IotDomainConfiguration#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#tags_all IotDomainConfiguration#tags_all}.

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.tlsConfig"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#tls_config IotDomainConfiguration#tls_config}

---

##### `validationCertificateArn`<sup>Optional</sup> <a name="validationCertificateArn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.Initializer.parameter.validationCertificateArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig">putAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetAuthorizerConfig">resetAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetDomainName">resetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetServerCertificateArns">resetServerCertificateArns</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetServiceType">resetServiceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetValidationCertificateArn">resetValidationCertificateArn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAuthorizerConfig` <a name="putAuthorizerConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig"></a>

```java
public void putAuthorizerConfig(IotDomainConfigurationAuthorizerConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putAuthorizerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putTlsConfig"></a>

```java
public void putTlsConfig(IotDomainConfigurationTlsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

---

##### `resetAuthorizerConfig` <a name="resetAuthorizerConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetAuthorizerConfig"></a>

```java
public void resetAuthorizerConfig()
```

##### `resetDomainName` <a name="resetDomainName" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetDomainName"></a>

```java
public void resetDomainName()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetId"></a>

```java
public void resetId()
```

##### `resetServerCertificateArns` <a name="resetServerCertificateArns" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetServerCertificateArns"></a>

```java
public void resetServerCertificateArns()
```

##### `resetServiceType` <a name="resetServiceType" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetServiceType"></a>

```java
public void resetServiceType()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTagsAll"></a>

```java
public void resetTagsAll()
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetTlsConfig"></a>

```java
public void resetTlsConfig()
```

##### `resetValidationCertificateArn` <a name="resetValidationCertificateArn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.resetValidationCertificateArn"></a>

```java
public void resetValidationCertificateArn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a IotDomainConfiguration resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_domain_configuration.IotDomainConfiguration;

IotDomainConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_domain_configuration.IotDomainConfiguration;

IotDomainConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_domain_configuration.IotDomainConfiguration;

IotDomainConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_domain_configuration.IotDomainConfiguration;

IotDomainConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),IotDomainConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a IotDomainConfiguration resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the IotDomainConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing IotDomainConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the IotDomainConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfig">authorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference">IotDomainConfigurationAuthorizerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainType">domainType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference">IotDomainConfigurationTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfigInput">authorizerConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArnsInput">serverCertificateArnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serviceTypeInput">serviceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArnInput">validationCertificateArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArns">serverCertificateArns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArn">validationCertificateArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `authorizerConfig`<sup>Required</sup> <a name="authorizerConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfig"></a>

```java
public IotDomainConfigurationAuthorizerConfigOutputReference getAuthorizerConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference">IotDomainConfigurationAuthorizerConfigOutputReference</a>

---

##### `domainType`<sup>Required</sup> <a name="domainType" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainType"></a>

```java
public java.lang.String getDomainType();
```

- *Type:* java.lang.String

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfig"></a>

```java
public IotDomainConfigurationTlsConfigOutputReference getTlsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference">IotDomainConfigurationTlsConfigOutputReference</a>

---

##### `authorizerConfigInput`<sup>Optional</sup> <a name="authorizerConfigInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.authorizerConfigInput"></a>

```java
public IotDomainConfigurationAuthorizerConfig getAuthorizerConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `serverCertificateArnsInput`<sup>Optional</sup> <a name="serverCertificateArnsInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArnsInput"></a>

```java
public java.util.List<java.lang.String> getServerCertificateArnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceTypeInput`<sup>Optional</sup> <a name="serviceTypeInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serviceTypeInput"></a>

```java
public java.lang.String getServiceTypeInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tlsConfigInput"></a>

```java
public IotDomainConfigurationTlsConfig getTlsConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

---

##### `validationCertificateArnInput`<sup>Optional</sup> <a name="validationCertificateArnInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArnInput"></a>

```java
public java.lang.String getValidationCertificateArnInput();
```

- *Type:* java.lang.String

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `serverCertificateArns`<sup>Required</sup> <a name="serverCertificateArns" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serverCertificateArns"></a>

```java
public java.util.List<java.lang.String> getServerCertificateArns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `serviceType`<sup>Required</sup> <a name="serviceType" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `validationCertificateArn`<sup>Required</sup> <a name="validationCertificateArn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.validationCertificateArn"></a>

```java
public java.lang.String getValidationCertificateArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### IotDomainConfigurationAuthorizerConfig <a name="IotDomainConfigurationAuthorizerConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_domain_configuration.IotDomainConfigurationAuthorizerConfig;

IotDomainConfigurationAuthorizerConfig.builder()
//  .allowAuthorizerOverride(java.lang.Boolean)
//  .allowAuthorizerOverride(IResolvable)
//  .defaultAuthorizerName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.allowAuthorizerOverride">allowAuthorizerOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#allow_authorizer_override IotDomainConfiguration#allow_authorizer_override}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.defaultAuthorizerName">defaultAuthorizerName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#default_authorizer_name IotDomainConfiguration#default_authorizer_name}. |

---

##### `allowAuthorizerOverride`<sup>Optional</sup> <a name="allowAuthorizerOverride" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.allowAuthorizerOverride"></a>

```java
public java.lang.Object getAllowAuthorizerOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#allow_authorizer_override IotDomainConfiguration#allow_authorizer_override}.

---

##### `defaultAuthorizerName`<sup>Optional</sup> <a name="defaultAuthorizerName" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig.property.defaultAuthorizerName"></a>

```java
public java.lang.String getDefaultAuthorizerName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#default_authorizer_name IotDomainConfiguration#default_authorizer_name}.

---

### IotDomainConfigurationConfig <a name="IotDomainConfigurationConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_domain_configuration.IotDomainConfigurationConfig;

IotDomainConfigurationConfig.builder()
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
    .name(java.lang.String)
//  .authorizerConfig(IotDomainConfigurationAuthorizerConfig)
//  .domainName(java.lang.String)
//  .id(java.lang.String)
//  .serverCertificateArns(java.util.List<java.lang.String>)
//  .serviceType(java.lang.String)
//  .status(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
//  .tlsConfig(IotDomainConfigurationTlsConfig)
//  .validationCertificateArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#name IotDomainConfiguration#name}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.authorizerConfig">authorizerConfig</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | authorizer_config block. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#id IotDomainConfiguration#id}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.serverCertificateArns">serverCertificateArns</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.serviceType">serviceType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#status IotDomainConfiguration#status}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#tags_all IotDomainConfiguration#tags_all}. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | tls_config block. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.validationCertificateArn">validationCertificateArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#name IotDomainConfiguration#name}.

---

##### `authorizerConfig`<sup>Optional</sup> <a name="authorizerConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.authorizerConfig"></a>

```java
public IotDomainConfigurationAuthorizerConfig getAuthorizerConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

authorizer_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#authorizer_config IotDomainConfiguration#authorizer_config}

---

##### `domainName`<sup>Optional</sup> <a name="domainName" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#domain_name IotDomainConfiguration#domain_name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#id IotDomainConfiguration#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `serverCertificateArns`<sup>Optional</sup> <a name="serverCertificateArns" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.serverCertificateArns"></a>

```java
public java.util.List<java.lang.String> getServerCertificateArns();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#server_certificate_arns IotDomainConfiguration#server_certificate_arns}.

---

##### `serviceType`<sup>Optional</sup> <a name="serviceType" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.serviceType"></a>

```java
public java.lang.String getServiceType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#service_type IotDomainConfiguration#service_type}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#status IotDomainConfiguration#status}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#tags IotDomainConfiguration#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#tags_all IotDomainConfiguration#tags_all}.

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.tlsConfig"></a>

```java
public IotDomainConfigurationTlsConfig getTlsConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#tls_config IotDomainConfiguration#tls_config}

---

##### `validationCertificateArn`<sup>Optional</sup> <a name="validationCertificateArn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationConfig.property.validationCertificateArn"></a>

```java
public java.lang.String getValidationCertificateArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#validation_certificate_arn IotDomainConfiguration#validation_certificate_arn}.

---

### IotDomainConfigurationTlsConfig <a name="IotDomainConfigurationTlsConfig" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_domain_configuration.IotDomainConfigurationTlsConfig;

IotDomainConfigurationTlsConfig.builder()
//  .securityPolicy(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#security_policy IotDomainConfiguration#security_policy}. |

---

##### `securityPolicy`<sup>Optional</sup> <a name="securityPolicy" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.71.0/docs/resources/iot_domain_configuration#security_policy IotDomainConfiguration#security_policy}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotDomainConfigurationAuthorizerConfigOutputReference <a name="IotDomainConfigurationAuthorizerConfigOutputReference" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_domain_configuration.IotDomainConfigurationAuthorizerConfigOutputReference;

new IotDomainConfigurationAuthorizerConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetAllowAuthorizerOverride">resetAllowAuthorizerOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetDefaultAuthorizerName">resetDefaultAuthorizerName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAllowAuthorizerOverride` <a name="resetAllowAuthorizerOverride" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetAllowAuthorizerOverride"></a>

```java
public void resetAllowAuthorizerOverride()
```

##### `resetDefaultAuthorizerName` <a name="resetDefaultAuthorizerName" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.resetDefaultAuthorizerName"></a>

```java
public void resetDefaultAuthorizerName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverrideInput">allowAuthorizerOverrideInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerNameInput">defaultAuthorizerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverride">allowAuthorizerOverride</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerName">defaultAuthorizerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `allowAuthorizerOverrideInput`<sup>Optional</sup> <a name="allowAuthorizerOverrideInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverrideInput"></a>

```java
public java.lang.Object getAllowAuthorizerOverrideInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultAuthorizerNameInput`<sup>Optional</sup> <a name="defaultAuthorizerNameInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerNameInput"></a>

```java
public java.lang.String getDefaultAuthorizerNameInput();
```

- *Type:* java.lang.String

---

##### `allowAuthorizerOverride`<sup>Required</sup> <a name="allowAuthorizerOverride" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.allowAuthorizerOverride"></a>

```java
public java.lang.Object getAllowAuthorizerOverride();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `defaultAuthorizerName`<sup>Required</sup> <a name="defaultAuthorizerName" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.defaultAuthorizerName"></a>

```java
public java.lang.String getDefaultAuthorizerName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfigOutputReference.property.internalValue"></a>

```java
public IotDomainConfigurationAuthorizerConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationAuthorizerConfig">IotDomainConfigurationAuthorizerConfig</a>

---


### IotDomainConfigurationTlsConfigOutputReference <a name="IotDomainConfigurationTlsConfigOutputReference" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.iot_domain_configuration.IotDomainConfigurationTlsConfigOutputReference;

new IotDomainConfigurationTlsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resetSecurityPolicy">resetSecurityPolicy</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecurityPolicy` <a name="resetSecurityPolicy" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.resetSecurityPolicy"></a>

```java
public void resetSecurityPolicy()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicyInput">securityPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicy">securityPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `securityPolicyInput`<sup>Optional</sup> <a name="securityPolicyInput" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicyInput"></a>

```java
public java.lang.String getSecurityPolicyInput();
```

- *Type:* java.lang.String

---

##### `securityPolicy`<sup>Required</sup> <a name="securityPolicy" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.securityPolicy"></a>

```java
public java.lang.String getSecurityPolicy();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfigOutputReference.property.internalValue"></a>

```java
public IotDomainConfigurationTlsConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.iotDomainConfiguration.IotDomainConfigurationTlsConfig">IotDomainConfigurationTlsConfig</a>

---



