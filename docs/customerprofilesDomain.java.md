# `customerprofilesDomain` Submodule <a name="`customerprofilesDomain` Submodule" id="@cdktf/provider-aws.customerprofilesDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CustomerprofilesDomain <a name="CustomerprofilesDomain" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain aws_customerprofiles_domain}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomain;

CustomerprofilesDomain.Builder.create(Construct scope, java.lang.String id)
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
    .defaultExpirationDays(java.lang.Number)
    .domainName(java.lang.String)
//  .deadLetterQueueUrl(java.lang.String)
//  .defaultEncryptionKey(java.lang.String)
//  .id(java.lang.String)
//  .matching(CustomerprofilesDomainMatching)
//  .ruleBasedMatching(CustomerprofilesDomainRuleBasedMatching)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.defaultExpirationDays">defaultExpirationDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#default_expiration_days CustomerprofilesDomain#default_expiration_days}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#domain_name CustomerprofilesDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.deadLetterQueueUrl">deadLetterQueueUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#dead_letter_queue_url CustomerprofilesDomain#dead_letter_queue_url}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.defaultEncryptionKey">defaultEncryptionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#default_encryption_key CustomerprofilesDomain#default_encryption_key}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#id CustomerprofilesDomain#id}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.matching">matching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a></code> | matching block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.ruleBasedMatching">ruleBasedMatching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a></code> | rule_based_matching block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#tags CustomerprofilesDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#tags_all CustomerprofilesDomain#tags_all}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultExpirationDays`<sup>Required</sup> <a name="defaultExpirationDays" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.defaultExpirationDays"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#default_expiration_days CustomerprofilesDomain#default_expiration_days}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.domainName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#domain_name CustomerprofilesDomain#domain_name}.

---

##### `deadLetterQueueUrl`<sup>Optional</sup> <a name="deadLetterQueueUrl" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.deadLetterQueueUrl"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#dead_letter_queue_url CustomerprofilesDomain#dead_letter_queue_url}.

---

##### `defaultEncryptionKey`<sup>Optional</sup> <a name="defaultEncryptionKey" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.defaultEncryptionKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#default_encryption_key CustomerprofilesDomain#default_encryption_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#id CustomerprofilesDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matching`<sup>Optional</sup> <a name="matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.matching"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a>

matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#matching CustomerprofilesDomain#matching}

---

##### `ruleBasedMatching`<sup>Optional</sup> <a name="ruleBasedMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.ruleBasedMatching"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a>

rule_based_matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#rule_based_matching CustomerprofilesDomain#rule_based_matching}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#tags CustomerprofilesDomain#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.Initializer.parameter.tagsAll"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#tags_all CustomerprofilesDomain#tags_all}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putMatching">putMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching">putRuleBasedMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetDeadLetterQueueUrl">resetDeadLetterQueueUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetDefaultEncryptionKey">resetDefaultEncryptionKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetMatching">resetMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetRuleBasedMatching">resetRuleBasedMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetTagsAll">resetTagsAll</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget OR TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMatching` <a name="putMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putMatching"></a>

```java
public void putMatching(CustomerprofilesDomainMatching value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putMatching.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a>

---

##### `putRuleBasedMatching` <a name="putRuleBasedMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching"></a>

```java
public void putRuleBasedMatching(CustomerprofilesDomainRuleBasedMatching value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.putRuleBasedMatching.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a>

---

##### `resetDeadLetterQueueUrl` <a name="resetDeadLetterQueueUrl" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetDeadLetterQueueUrl"></a>

```java
public void resetDeadLetterQueueUrl()
```

##### `resetDefaultEncryptionKey` <a name="resetDefaultEncryptionKey" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetDefaultEncryptionKey"></a>

```java
public void resetDefaultEncryptionKey()
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetId"></a>

```java
public void resetId()
```

##### `resetMatching` <a name="resetMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetMatching"></a>

```java
public void resetMatching()
```

##### `resetRuleBasedMatching` <a name="resetRuleBasedMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetRuleBasedMatching"></a>

```java
public void resetRuleBasedMatching()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetTags"></a>

```java
public void resetTags()
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.resetTagsAll"></a>

```java
public void resetTagsAll()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a CustomerprofilesDomain resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomain;

CustomerprofilesDomain.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomain;

CustomerprofilesDomain.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomain;

CustomerprofilesDomain.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomain;

CustomerprofilesDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CustomerprofilesDomain.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a CustomerprofilesDomain resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CustomerprofilesDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CustomerprofilesDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the CustomerprofilesDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.matching">matching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference">CustomerprofilesDomainMatchingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.ruleBasedMatching">ruleBasedMatching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference">CustomerprofilesDomainRuleBasedMatchingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.deadLetterQueueUrlInput">deadLetterQueueUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultEncryptionKeyInput">defaultEncryptionKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultExpirationDaysInput">defaultExpirationDaysInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.domainNameInput">domainNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.matchingInput">matchingInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.ruleBasedMatchingInput">ruleBasedMatchingInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsAllInput">tagsAllInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.deadLetterQueueUrl">deadLetterQueueUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultEncryptionKey">defaultEncryptionKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultExpirationDays">defaultExpirationDays</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.domainName">domainName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `matching`<sup>Required</sup> <a name="matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.matching"></a>

```java
public CustomerprofilesDomainMatchingOutputReference getMatching();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference">CustomerprofilesDomainMatchingOutputReference</a>

---

##### `ruleBasedMatching`<sup>Required</sup> <a name="ruleBasedMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.ruleBasedMatching"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingOutputReference getRuleBasedMatching();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference">CustomerprofilesDomainRuleBasedMatchingOutputReference</a>

---

##### `deadLetterQueueUrlInput`<sup>Optional</sup> <a name="deadLetterQueueUrlInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.deadLetterQueueUrlInput"></a>

```java
public java.lang.String getDeadLetterQueueUrlInput();
```

- *Type:* java.lang.String

---

##### `defaultEncryptionKeyInput`<sup>Optional</sup> <a name="defaultEncryptionKeyInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultEncryptionKeyInput"></a>

```java
public java.lang.String getDefaultEncryptionKeyInput();
```

- *Type:* java.lang.String

---

##### `defaultExpirationDaysInput`<sup>Optional</sup> <a name="defaultExpirationDaysInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultExpirationDaysInput"></a>

```java
public java.lang.Number getDefaultExpirationDaysInput();
```

- *Type:* java.lang.Number

---

##### `domainNameInput`<sup>Optional</sup> <a name="domainNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.domainNameInput"></a>

```java
public java.lang.String getDomainNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `matchingInput`<sup>Optional</sup> <a name="matchingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.matchingInput"></a>

```java
public CustomerprofilesDomainMatching getMatchingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a>

---

##### `ruleBasedMatchingInput`<sup>Optional</sup> <a name="ruleBasedMatchingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.ruleBasedMatchingInput"></a>

```java
public CustomerprofilesDomainRuleBasedMatching getRuleBasedMatchingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a>

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsAllInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAllInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deadLetterQueueUrl`<sup>Required</sup> <a name="deadLetterQueueUrl" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.deadLetterQueueUrl"></a>

```java
public java.lang.String getDeadLetterQueueUrl();
```

- *Type:* java.lang.String

---

##### `defaultEncryptionKey`<sup>Required</sup> <a name="defaultEncryptionKey" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultEncryptionKey"></a>

```java
public java.lang.String getDefaultEncryptionKey();
```

- *Type:* java.lang.String

---

##### `defaultExpirationDays`<sup>Required</sup> <a name="defaultExpirationDays" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.defaultExpirationDays"></a>

```java
public java.lang.Number getDefaultExpirationDays();
```

- *Type:* java.lang.Number

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomain.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CustomerprofilesDomainConfig <a name="CustomerprofilesDomainConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainConfig;

CustomerprofilesDomainConfig.builder()
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
    .defaultExpirationDays(java.lang.Number)
    .domainName(java.lang.String)
//  .deadLetterQueueUrl(java.lang.String)
//  .defaultEncryptionKey(java.lang.String)
//  .id(java.lang.String)
//  .matching(CustomerprofilesDomainMatching)
//  .ruleBasedMatching(CustomerprofilesDomainRuleBasedMatching)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .tagsAll(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.defaultExpirationDays">defaultExpirationDays</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#default_expiration_days CustomerprofilesDomain#default_expiration_days}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.domainName">domainName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#domain_name CustomerprofilesDomain#domain_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.deadLetterQueueUrl">deadLetterQueueUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#dead_letter_queue_url CustomerprofilesDomain#dead_letter_queue_url}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.defaultEncryptionKey">defaultEncryptionKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#default_encryption_key CustomerprofilesDomain#default_encryption_key}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#id CustomerprofilesDomain#id}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.matching">matching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a></code> | matching block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.ruleBasedMatching">ruleBasedMatching</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a></code> | rule_based_matching block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#tags CustomerprofilesDomain#tags}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.tagsAll">tagsAll</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#tags_all CustomerprofilesDomain#tags_all}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `defaultExpirationDays`<sup>Required</sup> <a name="defaultExpirationDays" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.defaultExpirationDays"></a>

```java
public java.lang.Number getDefaultExpirationDays();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#default_expiration_days CustomerprofilesDomain#default_expiration_days}.

---

##### `domainName`<sup>Required</sup> <a name="domainName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.domainName"></a>

```java
public java.lang.String getDomainName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#domain_name CustomerprofilesDomain#domain_name}.

---

##### `deadLetterQueueUrl`<sup>Optional</sup> <a name="deadLetterQueueUrl" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.deadLetterQueueUrl"></a>

```java
public java.lang.String getDeadLetterQueueUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#dead_letter_queue_url CustomerprofilesDomain#dead_letter_queue_url}.

---

##### `defaultEncryptionKey`<sup>Optional</sup> <a name="defaultEncryptionKey" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.defaultEncryptionKey"></a>

```java
public java.lang.String getDefaultEncryptionKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#default_encryption_key CustomerprofilesDomain#default_encryption_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#id CustomerprofilesDomain#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matching`<sup>Optional</sup> <a name="matching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.matching"></a>

```java
public CustomerprofilesDomainMatching getMatching();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a>

matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#matching CustomerprofilesDomain#matching}

---

##### `ruleBasedMatching`<sup>Optional</sup> <a name="ruleBasedMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.ruleBasedMatching"></a>

```java
public CustomerprofilesDomainRuleBasedMatching getRuleBasedMatching();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a>

rule_based_matching block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#rule_based_matching CustomerprofilesDomain#rule_based_matching}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#tags CustomerprofilesDomain#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainConfig.property.tagsAll"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsAll();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#tags_all CustomerprofilesDomain#tags_all}.

---

### CustomerprofilesDomainMatching <a name="CustomerprofilesDomainMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainMatching;

CustomerprofilesDomainMatching.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .autoMerging(CustomerprofilesDomainMatchingAutoMerging)
//  .exportingConfig(CustomerprofilesDomainMatchingExportingConfig)
//  .jobSchedule(CustomerprofilesDomainMatchingJobSchedule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.autoMerging">autoMerging</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a></code> | auto_merging block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.exportingConfig">exportingConfig</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a></code> | exporting_config block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.jobSchedule">jobSchedule</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a></code> | job_schedule block. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}.

---

##### `autoMerging`<sup>Optional</sup> <a name="autoMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.autoMerging"></a>

```java
public CustomerprofilesDomainMatchingAutoMerging getAutoMerging();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a>

auto_merging block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#auto_merging CustomerprofilesDomain#auto_merging}

---

##### `exportingConfig`<sup>Optional</sup> <a name="exportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.exportingConfig"></a>

```java
public CustomerprofilesDomainMatchingExportingConfig getExportingConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a>

exporting_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#exporting_config CustomerprofilesDomain#exporting_config}

---

##### `jobSchedule`<sup>Optional</sup> <a name="jobSchedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching.property.jobSchedule"></a>

```java
public CustomerprofilesDomainMatchingJobSchedule getJobSchedule();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a>

job_schedule block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#job_schedule CustomerprofilesDomain#job_schedule}

---

### CustomerprofilesDomainMatchingAutoMerging <a name="CustomerprofilesDomainMatchingAutoMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainMatchingAutoMerging;

CustomerprofilesDomainMatchingAutoMerging.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .conflictResolution(CustomerprofilesDomainMatchingAutoMergingConflictResolution)
//  .consolidation(CustomerprofilesDomainMatchingAutoMergingConsolidation)
//  .minAllowedConfidenceScoreForMerging(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.conflictResolution">conflictResolution</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a></code> | conflict_resolution block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.consolidation">consolidation</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a></code> | consolidation block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.minAllowedConfidenceScoreForMerging">minAllowedConfidenceScoreForMerging</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#min_allowed_confidence_score_for_merging CustomerprofilesDomain#min_allowed_confidence_score_for_merging}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}.

---

##### `conflictResolution`<sup>Optional</sup> <a name="conflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.conflictResolution"></a>

```java
public CustomerprofilesDomainMatchingAutoMergingConflictResolution getConflictResolution();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a>

conflict_resolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#conflict_resolution CustomerprofilesDomain#conflict_resolution}

---

##### `consolidation`<sup>Optional</sup> <a name="consolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.consolidation"></a>

```java
public CustomerprofilesDomainMatchingAutoMergingConsolidation getConsolidation();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a>

consolidation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#consolidation CustomerprofilesDomain#consolidation}

---

##### `minAllowedConfidenceScoreForMerging`<sup>Optional</sup> <a name="minAllowedConfidenceScoreForMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging.property.minAllowedConfidenceScoreForMerging"></a>

```java
public java.lang.Number getMinAllowedConfidenceScoreForMerging();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#min_allowed_confidence_score_for_merging CustomerprofilesDomain#min_allowed_confidence_score_for_merging}.

---

### CustomerprofilesDomainMatchingAutoMergingConflictResolution <a name="CustomerprofilesDomainMatchingAutoMergingConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainMatchingAutoMergingConflictResolution;

CustomerprofilesDomainMatchingAutoMergingConflictResolution.builder()
    .conflictResolvingModel(java.lang.String)
//  .sourceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.property.conflictResolvingModel">conflictResolvingModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}. |

---

##### `conflictResolvingModel`<sup>Required</sup> <a name="conflictResolvingModel" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.property.conflictResolvingModel"></a>

```java
public java.lang.String getConflictResolvingModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}.

---

##### `sourceName`<sup>Optional</sup> <a name="sourceName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}.

---

### CustomerprofilesDomainMatchingAutoMergingConsolidation <a name="CustomerprofilesDomainMatchingAutoMergingConsolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainMatchingAutoMergingConsolidation;

CustomerprofilesDomainMatchingAutoMergingConsolidation.builder()
    .matchingAttributesList(IResolvable)
    .matchingAttributesList(java.util.List<java.util.List<java.lang.String>>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation.property.matchingAttributesList">matchingAttributesList</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.String>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#matching_attributes_list CustomerprofilesDomain#matching_attributes_list}. |

---

##### `matchingAttributesList`<sup>Required</sup> <a name="matchingAttributesList" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation.property.matchingAttributesList"></a>

```java
public java.lang.Object getMatchingAttributesList();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.String>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#matching_attributes_list CustomerprofilesDomain#matching_attributes_list}.

---

### CustomerprofilesDomainMatchingExportingConfig <a name="CustomerprofilesDomainMatchingExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainMatchingExportingConfig;

CustomerprofilesDomainMatchingExportingConfig.builder()
//  .s3Exporting(CustomerprofilesDomainMatchingExportingConfigS3Exporting)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig.property.s3Exporting">s3Exporting</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a></code> | s3_exporting block. |

---

##### `s3Exporting`<sup>Optional</sup> <a name="s3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig.property.s3Exporting"></a>

```java
public CustomerprofilesDomainMatchingExportingConfigS3Exporting getS3Exporting();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a>

s3_exporting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#s3_exporting CustomerprofilesDomain#s3_exporting}

---

### CustomerprofilesDomainMatchingExportingConfigS3Exporting <a name="CustomerprofilesDomainMatchingExportingConfigS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainMatchingExportingConfigS3Exporting;

CustomerprofilesDomainMatchingExportingConfigS3Exporting.builder()
    .s3BucketName(java.lang.String)
//  .s3KeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.property.s3KeyName">s3KeyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}. |

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}.

---

##### `s3KeyName`<sup>Optional</sup> <a name="s3KeyName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting.property.s3KeyName"></a>

```java
public java.lang.String getS3KeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}.

---

### CustomerprofilesDomainMatchingJobSchedule <a name="CustomerprofilesDomainMatchingJobSchedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainMatchingJobSchedule;

CustomerprofilesDomainMatchingJobSchedule.builder()
    .dayOfTheWeek(java.lang.String)
    .time(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#day_of_the_week CustomerprofilesDomain#day_of_the_week}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.property.time">time</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#time CustomerprofilesDomain#time}. |

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.property.dayOfTheWeek"></a>

```java
public java.lang.String getDayOfTheWeek();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#day_of_the_week CustomerprofilesDomain#day_of_the_week}.

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#time CustomerprofilesDomain#time}.

---

### CustomerprofilesDomainRuleBasedMatching <a name="CustomerprofilesDomainRuleBasedMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainRuleBasedMatching;

CustomerprofilesDomainRuleBasedMatching.builder()
    .enabled(java.lang.Boolean)
    .enabled(IResolvable)
//  .attributeTypesSelector(CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector)
//  .conflictResolution(CustomerprofilesDomainRuleBasedMatchingConflictResolution)
//  .exportingConfig(CustomerprofilesDomainRuleBasedMatchingExportingConfig)
//  .matchingRules(IResolvable)
//  .matchingRules(java.util.List<CustomerprofilesDomainRuleBasedMatchingMatchingRules>)
//  .maxAllowedRuleLevelForMatching(java.lang.Number)
//  .maxAllowedRuleLevelForMerging(java.lang.Number)
//  .status(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.attributeTypesSelector">attributeTypesSelector</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a></code> | attribute_types_selector block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.conflictResolution">conflictResolution</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a></code> | conflict_resolution block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.exportingConfig">exportingConfig</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a></code> | exporting_config block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.matchingRules">matchingRules</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>></code> | matching_rules block. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.maxAllowedRuleLevelForMatching">maxAllowedRuleLevelForMatching</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_matching CustomerprofilesDomain#max_allowed_rule_level_for_matching}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.maxAllowedRuleLevelForMerging">maxAllowedRuleLevelForMerging</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_merging CustomerprofilesDomain#max_allowed_rule_level_for_merging}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.status">status</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#status CustomerprofilesDomain#status}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#enabled CustomerprofilesDomain#enabled}.

---

##### `attributeTypesSelector`<sup>Optional</sup> <a name="attributeTypesSelector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.attributeTypesSelector"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector getAttributeTypesSelector();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a>

attribute_types_selector block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#attribute_types_selector CustomerprofilesDomain#attribute_types_selector}

---

##### `conflictResolution`<sup>Optional</sup> <a name="conflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.conflictResolution"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingConflictResolution getConflictResolution();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a>

conflict_resolution block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#conflict_resolution CustomerprofilesDomain#conflict_resolution}

---

##### `exportingConfig`<sup>Optional</sup> <a name="exportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.exportingConfig"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingExportingConfig getExportingConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a>

exporting_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#exporting_config CustomerprofilesDomain#exporting_config}

---

##### `matchingRules`<sup>Optional</sup> <a name="matchingRules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.matchingRules"></a>

```java
public java.lang.Object getMatchingRules();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>>

matching_rules block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#matching_rules CustomerprofilesDomain#matching_rules}

---

##### `maxAllowedRuleLevelForMatching`<sup>Optional</sup> <a name="maxAllowedRuleLevelForMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.maxAllowedRuleLevelForMatching"></a>

```java
public java.lang.Number getMaxAllowedRuleLevelForMatching();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_matching CustomerprofilesDomain#max_allowed_rule_level_for_matching}.

---

##### `maxAllowedRuleLevelForMerging`<sup>Optional</sup> <a name="maxAllowedRuleLevelForMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.maxAllowedRuleLevelForMerging"></a>

```java
public java.lang.Number getMaxAllowedRuleLevelForMerging();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#max_allowed_rule_level_for_merging CustomerprofilesDomain#max_allowed_rule_level_for_merging}.

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#status CustomerprofilesDomain#status}.

---

### CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector <a name="CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector;

CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.builder()
    .attributeMatchingModel(java.lang.String)
//  .address(java.util.List<java.lang.String>)
//  .emailAddress(java.util.List<java.lang.String>)
//  .phoneNumber(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.attributeMatchingModel">attributeMatchingModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#attribute_matching_model CustomerprofilesDomain#attribute_matching_model}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.address">address</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#address CustomerprofilesDomain#address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.emailAddress">emailAddress</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#email_address CustomerprofilesDomain#email_address}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.phoneNumber">phoneNumber</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#phone_number CustomerprofilesDomain#phone_number}. |

---

##### `attributeMatchingModel`<sup>Required</sup> <a name="attributeMatchingModel" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.attributeMatchingModel"></a>

```java
public java.lang.String getAttributeMatchingModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#attribute_matching_model CustomerprofilesDomain#attribute_matching_model}.

---

##### `address`<sup>Optional</sup> <a name="address" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.address"></a>

```java
public java.util.List<java.lang.String> getAddress();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#address CustomerprofilesDomain#address}.

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.emailAddress"></a>

```java
public java.util.List<java.lang.String> getEmailAddress();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#email_address CustomerprofilesDomain#email_address}.

---

##### `phoneNumber`<sup>Optional</sup> <a name="phoneNumber" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector.property.phoneNumber"></a>

```java
public java.util.List<java.lang.String> getPhoneNumber();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#phone_number CustomerprofilesDomain#phone_number}.

---

### CustomerprofilesDomainRuleBasedMatchingConflictResolution <a name="CustomerprofilesDomainRuleBasedMatchingConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainRuleBasedMatchingConflictResolution;

CustomerprofilesDomainRuleBasedMatchingConflictResolution.builder()
    .conflictResolvingModel(java.lang.String)
//  .sourceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.property.conflictResolvingModel">conflictResolvingModel</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}. |

---

##### `conflictResolvingModel`<sup>Required</sup> <a name="conflictResolvingModel" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.property.conflictResolvingModel"></a>

```java
public java.lang.String getConflictResolvingModel();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#conflict_resolving_model CustomerprofilesDomain#conflict_resolving_model}.

---

##### `sourceName`<sup>Optional</sup> <a name="sourceName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#source_name CustomerprofilesDomain#source_name}.

---

### CustomerprofilesDomainRuleBasedMatchingExportingConfig <a name="CustomerprofilesDomainRuleBasedMatchingExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainRuleBasedMatchingExportingConfig;

CustomerprofilesDomainRuleBasedMatchingExportingConfig.builder()
//  .s3Exporting(CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig.property.s3Exporting">s3Exporting</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a></code> | s3_exporting block. |

---

##### `s3Exporting`<sup>Optional</sup> <a name="s3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig.property.s3Exporting"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting getS3Exporting();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a>

s3_exporting block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#s3_exporting CustomerprofilesDomain#s3_exporting}

---

### CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting <a name="CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting;

CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.builder()
    .s3BucketName(java.lang.String)
//  .s3KeyName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.property.s3KeyName">s3KeyName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}. |

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#s3_bucket_name CustomerprofilesDomain#s3_bucket_name}.

---

##### `s3KeyName`<sup>Optional</sup> <a name="s3KeyName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting.property.s3KeyName"></a>

```java
public java.lang.String getS3KeyName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#s3_key_name CustomerprofilesDomain#s3_key_name}.

---

### CustomerprofilesDomainRuleBasedMatchingMatchingRules <a name="CustomerprofilesDomainRuleBasedMatchingMatchingRules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainRuleBasedMatchingMatchingRules;

CustomerprofilesDomainRuleBasedMatchingMatchingRules.builder()
    .rule(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules.property.rule">rule</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#rule CustomerprofilesDomain#rule}. |

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules.property.rule"></a>

```java
public java.util.List<java.lang.String> getRule();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.54.1/docs/resources/customerprofiles_domain#rule CustomerprofilesDomain#rule}.

---

## Classes <a name="Classes" id="Classes"></a>

### CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference <a name="CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference;

new CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resetSourceName">resetSourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceName` <a name="resetSourceName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.resetSourceName"></a>

```java
public void resetSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.conflictResolvingModelInput">conflictResolvingModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.sourceNameInput">sourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.conflictResolvingModel">conflictResolvingModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conflictResolvingModelInput`<sup>Optional</sup> <a name="conflictResolvingModelInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.conflictResolvingModelInput"></a>

```java
public java.lang.String getConflictResolvingModelInput();
```

- *Type:* java.lang.String

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.sourceNameInput"></a>

```java
public java.lang.String getSourceNameInput();
```

- *Type:* java.lang.String

---

##### `conflictResolvingModel`<sup>Required</sup> <a name="conflictResolvingModel" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.conflictResolvingModel"></a>

```java
public java.lang.String getConflictResolvingModel();
```

- *Type:* java.lang.String

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference.property.internalValue"></a>

```java
public CustomerprofilesDomainMatchingAutoMergingConflictResolution getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a>

---


### CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference <a name="CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference;

new CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.matchingAttributesListInput">matchingAttributesListInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.matchingAttributesList">matchingAttributesList</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `matchingAttributesListInput`<sup>Optional</sup> <a name="matchingAttributesListInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.matchingAttributesListInput"></a>

```java
public java.lang.Object getMatchingAttributesListInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.String>>

---

##### `matchingAttributesList`<sup>Required</sup> <a name="matchingAttributesList" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.matchingAttributesList"></a>

```java
public java.lang.Object getMatchingAttributesList();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<java.util.List<java.lang.String>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference.property.internalValue"></a>

```java
public CustomerprofilesDomainMatchingAutoMergingConsolidation getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a>

---


### CustomerprofilesDomainMatchingAutoMergingOutputReference <a name="CustomerprofilesDomainMatchingAutoMergingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainMatchingAutoMergingOutputReference;

new CustomerprofilesDomainMatchingAutoMergingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConflictResolution">putConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConsolidation">putConsolidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetConflictResolution">resetConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetConsolidation">resetConsolidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetMinAllowedConfidenceScoreForMerging">resetMinAllowedConfidenceScoreForMerging</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConflictResolution` <a name="putConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConflictResolution"></a>

```java
public void putConflictResolution(CustomerprofilesDomainMatchingAutoMergingConflictResolution value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConflictResolution.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a>

---

##### `putConsolidation` <a name="putConsolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConsolidation"></a>

```java
public void putConsolidation(CustomerprofilesDomainMatchingAutoMergingConsolidation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.putConsolidation.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a>

---

##### `resetConflictResolution` <a name="resetConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetConflictResolution"></a>

```java
public void resetConflictResolution()
```

##### `resetConsolidation` <a name="resetConsolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetConsolidation"></a>

```java
public void resetConsolidation()
```

##### `resetMinAllowedConfidenceScoreForMerging` <a name="resetMinAllowedConfidenceScoreForMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.resetMinAllowedConfidenceScoreForMerging"></a>

```java
public void resetMinAllowedConfidenceScoreForMerging()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.conflictResolution">conflictResolution</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference">CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.consolidation">consolidation</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference">CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.conflictResolutionInput">conflictResolutionInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.consolidationInput">consolidationInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.minAllowedConfidenceScoreForMergingInput">minAllowedConfidenceScoreForMergingInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.minAllowedConfidenceScoreForMerging">minAllowedConfidenceScoreForMerging</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conflictResolution`<sup>Required</sup> <a name="conflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.conflictResolution"></a>

```java
public CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference getConflictResolution();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference">CustomerprofilesDomainMatchingAutoMergingConflictResolutionOutputReference</a>

---

##### `consolidation`<sup>Required</sup> <a name="consolidation" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.consolidation"></a>

```java
public CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference getConsolidation();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference">CustomerprofilesDomainMatchingAutoMergingConsolidationOutputReference</a>

---

##### `conflictResolutionInput`<sup>Optional</sup> <a name="conflictResolutionInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.conflictResolutionInput"></a>

```java
public CustomerprofilesDomainMatchingAutoMergingConflictResolution getConflictResolutionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConflictResolution">CustomerprofilesDomainMatchingAutoMergingConflictResolution</a>

---

##### `consolidationInput`<sup>Optional</sup> <a name="consolidationInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.consolidationInput"></a>

```java
public CustomerprofilesDomainMatchingAutoMergingConsolidation getConsolidationInput();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingConsolidation">CustomerprofilesDomainMatchingAutoMergingConsolidation</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minAllowedConfidenceScoreForMergingInput`<sup>Optional</sup> <a name="minAllowedConfidenceScoreForMergingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.minAllowedConfidenceScoreForMergingInput"></a>

```java
public java.lang.Number getMinAllowedConfidenceScoreForMergingInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `minAllowedConfidenceScoreForMerging`<sup>Required</sup> <a name="minAllowedConfidenceScoreForMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.minAllowedConfidenceScoreForMerging"></a>

```java
public java.lang.Number getMinAllowedConfidenceScoreForMerging();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference.property.internalValue"></a>

```java
public CustomerprofilesDomainMatchingAutoMerging getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a>

---


### CustomerprofilesDomainMatchingExportingConfigOutputReference <a name="CustomerprofilesDomainMatchingExportingConfigOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainMatchingExportingConfigOutputReference;

new CustomerprofilesDomainMatchingExportingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.putS3Exporting">putS3Exporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resetS3Exporting">resetS3Exporting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Exporting` <a name="putS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.putS3Exporting"></a>

```java
public void putS3Exporting(CustomerprofilesDomainMatchingExportingConfigS3Exporting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.putS3Exporting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a>

---

##### `resetS3Exporting` <a name="resetS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.resetS3Exporting"></a>

```java
public void resetS3Exporting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.s3Exporting">s3Exporting</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference">CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.s3ExportingInput">s3ExportingInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Exporting`<sup>Required</sup> <a name="s3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.s3Exporting"></a>

```java
public CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference getS3Exporting();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference">CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference</a>

---

##### `s3ExportingInput`<sup>Optional</sup> <a name="s3ExportingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.s3ExportingInput"></a>

```java
public CustomerprofilesDomainMatchingExportingConfigS3Exporting getS3ExportingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference.property.internalValue"></a>

```java
public CustomerprofilesDomainMatchingExportingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a>

---


### CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference <a name="CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference;

new CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resetS3KeyName">resetS3KeyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3KeyName` <a name="resetS3KeyName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.resetS3KeyName"></a>

```java
public void resetS3KeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3KeyNameInput">s3KeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3KeyName">s3KeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `s3KeyNameInput`<sup>Optional</sup> <a name="s3KeyNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3KeyNameInput"></a>

```java
public java.lang.String getS3KeyNameInput();
```

- *Type:* java.lang.String

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `s3KeyName`<sup>Required</sup> <a name="s3KeyName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.s3KeyName"></a>

```java
public java.lang.String getS3KeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3ExportingOutputReference.property.internalValue"></a>

```java
public CustomerprofilesDomainMatchingExportingConfigS3Exporting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigS3Exporting">CustomerprofilesDomainMatchingExportingConfigS3Exporting</a>

---


### CustomerprofilesDomainMatchingJobScheduleOutputReference <a name="CustomerprofilesDomainMatchingJobScheduleOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainMatchingJobScheduleOutputReference;

new CustomerprofilesDomainMatchingJobScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.dayOfTheWeekInput">dayOfTheWeekInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.timeInput">timeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.dayOfTheWeek">dayOfTheWeek</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.time">time</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dayOfTheWeekInput`<sup>Optional</sup> <a name="dayOfTheWeekInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.dayOfTheWeekInput"></a>

```java
public java.lang.String getDayOfTheWeekInput();
```

- *Type:* java.lang.String

---

##### `timeInput`<sup>Optional</sup> <a name="timeInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.timeInput"></a>

```java
public java.lang.String getTimeInput();
```

- *Type:* java.lang.String

---

##### `dayOfTheWeek`<sup>Required</sup> <a name="dayOfTheWeek" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.dayOfTheWeek"></a>

```java
public java.lang.String getDayOfTheWeek();
```

- *Type:* java.lang.String

---

##### `time`<sup>Required</sup> <a name="time" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.time"></a>

```java
public java.lang.String getTime();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference.property.internalValue"></a>

```java
public CustomerprofilesDomainMatchingJobSchedule getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a>

---


### CustomerprofilesDomainMatchingOutputReference <a name="CustomerprofilesDomainMatchingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainMatchingOutputReference;

new CustomerprofilesDomainMatchingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putAutoMerging">putAutoMerging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putExportingConfig">putExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putJobSchedule">putJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetAutoMerging">resetAutoMerging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetExportingConfig">resetExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetJobSchedule">resetJobSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAutoMerging` <a name="putAutoMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putAutoMerging"></a>

```java
public void putAutoMerging(CustomerprofilesDomainMatchingAutoMerging value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putAutoMerging.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a>

---

##### `putExportingConfig` <a name="putExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putExportingConfig"></a>

```java
public void putExportingConfig(CustomerprofilesDomainMatchingExportingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putExportingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a>

---

##### `putJobSchedule` <a name="putJobSchedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putJobSchedule"></a>

```java
public void putJobSchedule(CustomerprofilesDomainMatchingJobSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.putJobSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a>

---

##### `resetAutoMerging` <a name="resetAutoMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetAutoMerging"></a>

```java
public void resetAutoMerging()
```

##### `resetExportingConfig` <a name="resetExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetExportingConfig"></a>

```java
public void resetExportingConfig()
```

##### `resetJobSchedule` <a name="resetJobSchedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.resetJobSchedule"></a>

```java
public void resetJobSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.autoMerging">autoMerging</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference">CustomerprofilesDomainMatchingAutoMergingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.exportingConfig">exportingConfig</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference">CustomerprofilesDomainMatchingExportingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.jobSchedule">jobSchedule</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference">CustomerprofilesDomainMatchingJobScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.autoMergingInput">autoMergingInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.exportingConfigInput">exportingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.jobScheduleInput">jobScheduleInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autoMerging`<sup>Required</sup> <a name="autoMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.autoMerging"></a>

```java
public CustomerprofilesDomainMatchingAutoMergingOutputReference getAutoMerging();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMergingOutputReference">CustomerprofilesDomainMatchingAutoMergingOutputReference</a>

---

##### `exportingConfig`<sup>Required</sup> <a name="exportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.exportingConfig"></a>

```java
public CustomerprofilesDomainMatchingExportingConfigOutputReference getExportingConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfigOutputReference">CustomerprofilesDomainMatchingExportingConfigOutputReference</a>

---

##### `jobSchedule`<sup>Required</sup> <a name="jobSchedule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.jobSchedule"></a>

```java
public CustomerprofilesDomainMatchingJobScheduleOutputReference getJobSchedule();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobScheduleOutputReference">CustomerprofilesDomainMatchingJobScheduleOutputReference</a>

---

##### `autoMergingInput`<sup>Optional</sup> <a name="autoMergingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.autoMergingInput"></a>

```java
public CustomerprofilesDomainMatchingAutoMerging getAutoMergingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingAutoMerging">CustomerprofilesDomainMatchingAutoMerging</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exportingConfigInput`<sup>Optional</sup> <a name="exportingConfigInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.exportingConfigInput"></a>

```java
public CustomerprofilesDomainMatchingExportingConfig getExportingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingExportingConfig">CustomerprofilesDomainMatchingExportingConfig</a>

---

##### `jobScheduleInput`<sup>Optional</sup> <a name="jobScheduleInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.jobScheduleInput"></a>

```java
public CustomerprofilesDomainMatchingJobSchedule getJobScheduleInput();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingJobSchedule">CustomerprofilesDomainMatchingJobSchedule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatchingOutputReference.property.internalValue"></a>

```java
public CustomerprofilesDomainMatching getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainMatching">CustomerprofilesDomainMatching</a>

---


### CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference;

new CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetAddress">resetAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetPhoneNumber">resetPhoneNumber</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAddress` <a name="resetAddress" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetAddress"></a>

```java
public void resetAddress()
```

##### `resetEmailAddress` <a name="resetEmailAddress" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetEmailAddress"></a>

```java
public void resetEmailAddress()
```

##### `resetPhoneNumber` <a name="resetPhoneNumber" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.resetPhoneNumber"></a>

```java
public void resetPhoneNumber()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.addressInput">addressInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.attributeMatchingModelInput">attributeMatchingModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.phoneNumberInput">phoneNumberInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.address">address</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.attributeMatchingModel">attributeMatchingModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.phoneNumber">phoneNumber</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `addressInput`<sup>Optional</sup> <a name="addressInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.addressInput"></a>

```java
public java.util.List<java.lang.String> getAddressInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributeMatchingModelInput`<sup>Optional</sup> <a name="attributeMatchingModelInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.attributeMatchingModelInput"></a>

```java
public java.lang.String getAttributeMatchingModelInput();
```

- *Type:* java.lang.String

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.emailAddressInput"></a>

```java
public java.util.List<java.lang.String> getEmailAddressInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phoneNumberInput`<sup>Optional</sup> <a name="phoneNumberInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.phoneNumberInput"></a>

```java
public java.util.List<java.lang.String> getPhoneNumberInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `address`<sup>Required</sup> <a name="address" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.address"></a>

```java
public java.util.List<java.lang.String> getAddress();
```

- *Type:* java.util.List<java.lang.String>

---

##### `attributeMatchingModel`<sup>Required</sup> <a name="attributeMatchingModel" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.attributeMatchingModel"></a>

```java
public java.lang.String getAttributeMatchingModel();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.emailAddress"></a>

```java
public java.util.List<java.lang.String> getEmailAddress();
```

- *Type:* java.util.List<java.lang.String>

---

##### `phoneNumber`<sup>Required</sup> <a name="phoneNumber" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.phoneNumber"></a>

```java
public java.util.List<java.lang.String> getPhoneNumber();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference.property.internalValue"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a>

---


### CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference;

new CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resetSourceName">resetSourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSourceName` <a name="resetSourceName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.resetSourceName"></a>

```java
public void resetSourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.conflictResolvingModelInput">conflictResolvingModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.sourceNameInput">sourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.conflictResolvingModel">conflictResolvingModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conflictResolvingModelInput`<sup>Optional</sup> <a name="conflictResolvingModelInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.conflictResolvingModelInput"></a>

```java
public java.lang.String getConflictResolvingModelInput();
```

- *Type:* java.lang.String

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.sourceNameInput"></a>

```java
public java.lang.String getSourceNameInput();
```

- *Type:* java.lang.String

---

##### `conflictResolvingModel`<sup>Required</sup> <a name="conflictResolvingModel" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.conflictResolvingModel"></a>

```java
public java.lang.String getConflictResolvingModel();
```

- *Type:* java.lang.String

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference.property.internalValue"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingConflictResolution getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a>

---


### CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference;

new CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.putS3Exporting">putS3Exporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resetS3Exporting">resetS3Exporting</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putS3Exporting` <a name="putS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.putS3Exporting"></a>

```java
public void putS3Exporting(CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.putS3Exporting.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a>

---

##### `resetS3Exporting` <a name="resetS3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.resetS3Exporting"></a>

```java
public void resetS3Exporting()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.s3Exporting">s3Exporting</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.s3ExportingInput">s3ExportingInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3Exporting`<sup>Required</sup> <a name="s3Exporting" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.s3Exporting"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference getS3Exporting();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference</a>

---

##### `s3ExportingInput`<sup>Optional</sup> <a name="s3ExportingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.s3ExportingInput"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting getS3ExportingInput();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference.property.internalValue"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingExportingConfig getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a>

---


### CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference;

new CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resetS3KeyName">resetS3KeyName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3KeyName` <a name="resetS3KeyName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.resetS3KeyName"></a>

```java
public void resetS3KeyName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3BucketNameInput">s3BucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3KeyNameInput">s3KeyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3BucketName">s3BucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3KeyName">s3KeyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketNameInput`<sup>Optional</sup> <a name="s3BucketNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3BucketNameInput"></a>

```java
public java.lang.String getS3BucketNameInput();
```

- *Type:* java.lang.String

---

##### `s3KeyNameInput`<sup>Optional</sup> <a name="s3KeyNameInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3KeyNameInput"></a>

```java
public java.lang.String getS3KeyNameInput();
```

- *Type:* java.lang.String

---

##### `s3BucketName`<sup>Required</sup> <a name="s3BucketName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3BucketName"></a>

```java
public java.lang.String getS3BucketName();
```

- *Type:* java.lang.String

---

##### `s3KeyName`<sup>Required</sup> <a name="s3KeyName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.s3KeyName"></a>

```java
public java.lang.String getS3KeyName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3ExportingOutputReference.property.internalValue"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting">CustomerprofilesDomainRuleBasedMatchingExportingConfigS3Exporting</a>

---


### CustomerprofilesDomainRuleBasedMatchingMatchingRulesList <a name="CustomerprofilesDomainRuleBasedMatchingMatchingRulesList" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList;

new CustomerprofilesDomainRuleBasedMatchingMatchingRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.get"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>>

---


### CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference;

new CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.ruleInput">ruleInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.rule">rule</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `ruleInput`<sup>Optional</sup> <a name="ruleInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.ruleInput"></a>

```java
public java.util.List<java.lang.String> getRuleInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `rule`<sup>Required</sup> <a name="rule" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.rule"></a>

```java
public java.util.List<java.lang.String> getRule();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>

---


### CustomerprofilesDomainRuleBasedMatchingOutputReference <a name="CustomerprofilesDomainRuleBasedMatchingOutputReference" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.customerprofiles_domain.CustomerprofilesDomainRuleBasedMatchingOutputReference;

new CustomerprofilesDomainRuleBasedMatchingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putAttributeTypesSelector">putAttributeTypesSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putConflictResolution">putConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putExportingConfig">putExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putMatchingRules">putMatchingRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetAttributeTypesSelector">resetAttributeTypesSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetConflictResolution">resetConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetExportingConfig">resetExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMatchingRules">resetMatchingRules</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMaxAllowedRuleLevelForMatching">resetMaxAllowedRuleLevelForMatching</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMaxAllowedRuleLevelForMerging">resetMaxAllowedRuleLevelForMerging</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetStatus">resetStatus</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributeTypesSelector` <a name="putAttributeTypesSelector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putAttributeTypesSelector"></a>

```java
public void putAttributeTypesSelector(CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putAttributeTypesSelector.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a>

---

##### `putConflictResolution` <a name="putConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putConflictResolution"></a>

```java
public void putConflictResolution(CustomerprofilesDomainRuleBasedMatchingConflictResolution value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putConflictResolution.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a>

---

##### `putExportingConfig` <a name="putExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putExportingConfig"></a>

```java
public void putExportingConfig(CustomerprofilesDomainRuleBasedMatchingExportingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putExportingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a>

---

##### `putMatchingRules` <a name="putMatchingRules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putMatchingRules"></a>

```java
public void putMatchingRules(IResolvable OR java.util.List<CustomerprofilesDomainRuleBasedMatchingMatchingRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.putMatchingRules.parameter.value"></a>

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>>

---

##### `resetAttributeTypesSelector` <a name="resetAttributeTypesSelector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetAttributeTypesSelector"></a>

```java
public void resetAttributeTypesSelector()
```

##### `resetConflictResolution` <a name="resetConflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetConflictResolution"></a>

```java
public void resetConflictResolution()
```

##### `resetExportingConfig` <a name="resetExportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetExportingConfig"></a>

```java
public void resetExportingConfig()
```

##### `resetMatchingRules` <a name="resetMatchingRules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMatchingRules"></a>

```java
public void resetMatchingRules()
```

##### `resetMaxAllowedRuleLevelForMatching` <a name="resetMaxAllowedRuleLevelForMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMaxAllowedRuleLevelForMatching"></a>

```java
public void resetMaxAllowedRuleLevelForMatching()
```

##### `resetMaxAllowedRuleLevelForMerging` <a name="resetMaxAllowedRuleLevelForMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetMaxAllowedRuleLevelForMerging"></a>

```java
public void resetMaxAllowedRuleLevelForMerging()
```

##### `resetStatus` <a name="resetStatus" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.resetStatus"></a>

```java
public void resetStatus()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.attributeTypesSelector">attributeTypesSelector</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.conflictResolution">conflictResolution</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference">CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.exportingConfig">exportingConfig</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference">CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.matchingRules">matchingRules</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList">CustomerprofilesDomainRuleBasedMatchingMatchingRulesList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.attributeTypesSelectorInput">attributeTypesSelectorInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.conflictResolutionInput">conflictResolutionInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.exportingConfigInput">exportingConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.matchingRulesInput">matchingRulesInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMatchingInput">maxAllowedRuleLevelForMatchingInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMergingInput">maxAllowedRuleLevelForMergingInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean OR com.hashicorp.cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMatching">maxAllowedRuleLevelForMatching</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMerging">maxAllowedRuleLevelForMerging</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeTypesSelector`<sup>Required</sup> <a name="attributeTypesSelector" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.attributeTypesSelector"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference getAttributeTypesSelector();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelectorOutputReference</a>

---

##### `conflictResolution`<sup>Required</sup> <a name="conflictResolution" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.conflictResolution"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference getConflictResolution();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference">CustomerprofilesDomainRuleBasedMatchingConflictResolutionOutputReference</a>

---

##### `exportingConfig`<sup>Required</sup> <a name="exportingConfig" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.exportingConfig"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference getExportingConfig();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference">CustomerprofilesDomainRuleBasedMatchingExportingConfigOutputReference</a>

---

##### `matchingRules`<sup>Required</sup> <a name="matchingRules" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.matchingRules"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingMatchingRulesList getMatchingRules();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRulesList">CustomerprofilesDomainRuleBasedMatchingMatchingRulesList</a>

---

##### `attributeTypesSelectorInput`<sup>Optional</sup> <a name="attributeTypesSelectorInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.attributeTypesSelectorInput"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector getAttributeTypesSelectorInput();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector">CustomerprofilesDomainRuleBasedMatchingAttributeTypesSelector</a>

---

##### `conflictResolutionInput`<sup>Optional</sup> <a name="conflictResolutionInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.conflictResolutionInput"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingConflictResolution getConflictResolutionInput();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingConflictResolution">CustomerprofilesDomainRuleBasedMatchingConflictResolution</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.enabledInput"></a>

```java
public java.lang.Object getEnabledInput();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `exportingConfigInput`<sup>Optional</sup> <a name="exportingConfigInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.exportingConfigInput"></a>

```java
public CustomerprofilesDomainRuleBasedMatchingExportingConfig getExportingConfigInput();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingExportingConfig">CustomerprofilesDomainRuleBasedMatchingExportingConfig</a>

---

##### `matchingRulesInput`<sup>Optional</sup> <a name="matchingRulesInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.matchingRulesInput"></a>

```java
public java.lang.Object getMatchingRulesInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR java.util.List<<a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingMatchingRules">CustomerprofilesDomainRuleBasedMatchingMatchingRules</a>>

---

##### `maxAllowedRuleLevelForMatchingInput`<sup>Optional</sup> <a name="maxAllowedRuleLevelForMatchingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMatchingInput"></a>

```java
public java.lang.Number getMaxAllowedRuleLevelForMatchingInput();
```

- *Type:* java.lang.Number

---

##### `maxAllowedRuleLevelForMergingInput`<sup>Optional</sup> <a name="maxAllowedRuleLevelForMergingInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMergingInput"></a>

```java
public java.lang.Number getMaxAllowedRuleLevelForMergingInput();
```

- *Type:* java.lang.Number

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.enabled"></a>

```java
public java.lang.Object getEnabled();
```

- *Type:* java.lang.Boolean OR com.hashicorp.cdktf.IResolvable

---

##### `maxAllowedRuleLevelForMatching`<sup>Required</sup> <a name="maxAllowedRuleLevelForMatching" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMatching"></a>

```java
public java.lang.Number getMaxAllowedRuleLevelForMatching();
```

- *Type:* java.lang.Number

---

##### `maxAllowedRuleLevelForMerging`<sup>Required</sup> <a name="maxAllowedRuleLevelForMerging" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.maxAllowedRuleLevelForMerging"></a>

```java
public java.lang.Number getMaxAllowedRuleLevelForMerging();
```

- *Type:* java.lang.Number

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatchingOutputReference.property.internalValue"></a>

```java
public CustomerprofilesDomainRuleBasedMatching getInternalValue();
```

- *Type:* <a href="#@cdktf/provider-aws.customerprofilesDomain.CustomerprofilesDomainRuleBasedMatching">CustomerprofilesDomainRuleBasedMatching</a>

---



