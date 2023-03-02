# `dataAwsRoute53ResolverRules` Submodule <a name="`dataAwsRoute53ResolverRules` Submodule" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverRules <a name="DataAwsRoute53ResolverRules" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules aws_route53_resolver_rules}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_resolver_rules.DataAwsRoute53ResolverRules;

DataAwsRoute53ResolverRules.Builder.create(Construct scope, java.lang.String id)
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
//  .id(java.lang.String)
//  .nameRegex(java.lang.String)
//  .ownerId(java.lang.String)
//  .resolverEndpointId(java.lang.String)
//  .ruleType(java.lang.String)
//  .shareStatus(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#id DataAwsRoute53ResolverRules#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#name_regex DataAwsRoute53ResolverRules#name_regex}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.ownerId">ownerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#owner_id DataAwsRoute53ResolverRules#owner_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.resolverEndpointId">resolverEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#resolver_endpoint_id DataAwsRoute53ResolverRules#resolver_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.ruleType">ruleType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#rule_type DataAwsRoute53ResolverRules#rule_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.shareStatus">shareStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#share_status DataAwsRoute53ResolverRules#share_status}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.count"></a>

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#id DataAwsRoute53ResolverRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.nameRegex"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#name_regex DataAwsRoute53ResolverRules#name_regex}.

---

##### `ownerId`<sup>Optional</sup> <a name="ownerId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.ownerId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#owner_id DataAwsRoute53ResolverRules#owner_id}.

---

##### `resolverEndpointId`<sup>Optional</sup> <a name="resolverEndpointId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.resolverEndpointId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#resolver_endpoint_id DataAwsRoute53ResolverRules#resolver_endpoint_id}.

---

##### `ruleType`<sup>Optional</sup> <a name="ruleType" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.ruleType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#rule_type DataAwsRoute53ResolverRules#rule_type}.

---

##### `shareStatus`<sup>Optional</sup> <a name="shareStatus" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.Initializer.parameter.shareStatus"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#share_status DataAwsRoute53ResolverRules#share_status}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetNameRegex">resetNameRegex</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetOwnerId">resetOwnerId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetResolverEndpointId">resetResolverEndpointId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetRuleType">resetRuleType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetShareStatus">resetShareStatus</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetId"></a>

```java
public void resetId()
```

##### `resetNameRegex` <a name="resetNameRegex" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetNameRegex"></a>

```java
public void resetNameRegex()
```

##### `resetOwnerId` <a name="resetOwnerId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetOwnerId"></a>

```java
public void resetOwnerId()
```

##### `resetResolverEndpointId` <a name="resetResolverEndpointId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetResolverEndpointId"></a>

```java
public void resetResolverEndpointId()
```

##### `resetRuleType` <a name="resetRuleType" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetRuleType"></a>

```java
public void resetRuleType()
```

##### `resetShareStatus` <a name="resetShareStatus" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.resetShareStatus"></a>

```java
public void resetShareStatus()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_resolver_rules.DataAwsRoute53ResolverRules;

DataAwsRoute53ResolverRules.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_resolver_rules.DataAwsRoute53ResolverRules;

DataAwsRoute53ResolverRules.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformDataSource"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_resolver_rules.DataAwsRoute53ResolverRules;

DataAwsRoute53ResolverRules.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverRuleIds">resolverRuleIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.nameRegexInput">nameRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ownerIdInput">ownerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverEndpointIdInput">resolverEndpointIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ruleTypeInput">ruleTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.shareStatusInput">shareStatusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverEndpointId">resolverEndpointId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ruleType">ruleType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.shareStatus">shareStatus</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `resolverRuleIds`<sup>Required</sup> <a name="resolverRuleIds" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverRuleIds"></a>

```java
public java.util.List<java.lang.String> getResolverRuleIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameRegexInput`<sup>Optional</sup> <a name="nameRegexInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.nameRegexInput"></a>

```java
public java.lang.String getNameRegexInput();
```

- *Type:* java.lang.String

---

##### `ownerIdInput`<sup>Optional</sup> <a name="ownerIdInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ownerIdInput"></a>

```java
public java.lang.String getOwnerIdInput();
```

- *Type:* java.lang.String

---

##### `resolverEndpointIdInput`<sup>Optional</sup> <a name="resolverEndpointIdInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverEndpointIdInput"></a>

```java
public java.lang.String getResolverEndpointIdInput();
```

- *Type:* java.lang.String

---

##### `ruleTypeInput`<sup>Optional</sup> <a name="ruleTypeInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ruleTypeInput"></a>

```java
public java.lang.String getRuleTypeInput();
```

- *Type:* java.lang.String

---

##### `shareStatusInput`<sup>Optional</sup> <a name="shareStatusInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.shareStatusInput"></a>

```java
public java.lang.String getShareStatusInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `nameRegex`<sup>Required</sup> <a name="nameRegex" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.nameRegex"></a>

```java
public java.lang.String getNameRegex();
```

- *Type:* java.lang.String

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

---

##### `resolverEndpointId`<sup>Required</sup> <a name="resolverEndpointId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.resolverEndpointId"></a>

```java
public java.lang.String getResolverEndpointId();
```

- *Type:* java.lang.String

---

##### `ruleType`<sup>Required</sup> <a name="ruleType" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.ruleType"></a>

```java
public java.lang.String getRuleType();
```

- *Type:* java.lang.String

---

##### `shareStatus`<sup>Required</sup> <a name="shareStatus" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.shareStatus"></a>

```java
public java.lang.String getShareStatus();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRules.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverRulesConfig <a name="DataAwsRoute53ResolverRulesConfig" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.data_aws_route53_resolver_rules.DataAwsRoute53ResolverRulesConfig;

DataAwsRoute53ResolverRulesConfig.builder()
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
//  .id(java.lang.String)
//  .nameRegex(java.lang.String)
//  .ownerId(java.lang.String)
//  .resolverEndpointId(java.lang.String)
//  .ruleType(java.lang.String)
//  .shareStatus(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.count">count</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#id DataAwsRoute53ResolverRules#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.nameRegex">nameRegex</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#name_regex DataAwsRoute53ResolverRules#name_regex}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.ownerId">ownerId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#owner_id DataAwsRoute53ResolverRules#owner_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.resolverEndpointId">resolverEndpointId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#resolver_endpoint_id DataAwsRoute53ResolverRules#resolver_endpoint_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.ruleType">ruleType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#rule_type DataAwsRoute53ResolverRules#rule_type}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.shareStatus">shareStatus</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#share_status DataAwsRoute53ResolverRules#share_status}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.count"></a>

```java
public java.lang.Number getCount();
```

- *Type:* java.lang.Number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#id DataAwsRoute53ResolverRules#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `nameRegex`<sup>Optional</sup> <a name="nameRegex" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.nameRegex"></a>

```java
public java.lang.String getNameRegex();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#name_regex DataAwsRoute53ResolverRules#name_regex}.

---

##### `ownerId`<sup>Optional</sup> <a name="ownerId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.ownerId"></a>

```java
public java.lang.String getOwnerId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#owner_id DataAwsRoute53ResolverRules#owner_id}.

---

##### `resolverEndpointId`<sup>Optional</sup> <a name="resolverEndpointId" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.resolverEndpointId"></a>

```java
public java.lang.String getResolverEndpointId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#resolver_endpoint_id DataAwsRoute53ResolverRules#resolver_endpoint_id}.

---

##### `ruleType`<sup>Optional</sup> <a name="ruleType" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.ruleType"></a>

```java
public java.lang.String getRuleType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#rule_type DataAwsRoute53ResolverRules#rule_type}.

---

##### `shareStatus`<sup>Optional</sup> <a name="shareStatus" id="@cdktf/provider-aws.dataAwsRoute53ResolverRules.DataAwsRoute53ResolverRulesConfig.property.shareStatus"></a>

```java
public java.lang.String getShareStatus();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/d/route53_resolver_rules#share_status DataAwsRoute53ResolverRules#share_status}.

---



