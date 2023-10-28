# `aws_quicksight_vpc_connection`

Refer to the Terraform Registory for docs: [`aws_quicksight_vpc_connection`](https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection).

# `quicksightVpcConnection` Submodule <a name="`quicksightVpcConnection` Submodule" id="@cdktf/provider-aws.quicksightVpcConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QuicksightVpcConnection <a name="QuicksightVpcConnection" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection aws_quicksight_vpc_connection}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_vpc_connection.QuicksightVpcConnection;

QuicksightVpcConnection.Builder.create(Construct scope, java.lang.String id)
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
    .roleArn(java.lang.String)
    .securityGroupIds(java.util.List<java.lang.String>)
    .subnetIds(java.util.List<java.lang.String>)
    .vpcConnectionId(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .dnsResolvers(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(QuicksightVpcConnectionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#name QuicksightVpcConnection#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#role_arn QuicksightVpcConnection#role_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#security_group_ids QuicksightVpcConnection#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#subnet_ids QuicksightVpcConnection#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.vpcConnectionId">vpcConnectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#vpc_connection_id QuicksightVpcConnection#vpc_connection_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#aws_account_id QuicksightVpcConnection#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.dnsResolvers">dnsResolvers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#dns_resolvers QuicksightVpcConnection#dns_resolvers}. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#tags QuicksightVpcConnection#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeouts">QuicksightVpcConnectionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.connection"></a>

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.forEach"></a>

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.lifecycle"></a>

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#name QuicksightVpcConnection#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#role_arn QuicksightVpcConnection#role_arn}.

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.securityGroupIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#security_group_ids QuicksightVpcConnection#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.subnetIds"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#subnet_ids QuicksightVpcConnection#subnet_ids}.

---

##### `vpcConnectionId`<sup>Required</sup> <a name="vpcConnectionId" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.vpcConnectionId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#vpc_connection_id QuicksightVpcConnection#vpc_connection_id}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.awsAccountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#aws_account_id QuicksightVpcConnection#aws_account_id}.

---

##### `dnsResolvers`<sup>Optional</sup> <a name="dnsResolvers" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.dnsResolvers"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#dns_resolvers QuicksightVpcConnection#dns_resolvers}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#tags QuicksightVpcConnection#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeouts">QuicksightVpcConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#timeouts QuicksightVpcConnection#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.resetDnsResolvers">resetDnsResolvers</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `importFrom` <a name="importFrom" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.importFrom.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveTo` <a name="moveTo" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String OR java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String OR java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.putTimeouts"></a>

```java
public void putTimeouts(QuicksightVpcConnectionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeouts">QuicksightVpcConnectionTimeouts</a>

---

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

##### `resetDnsResolvers` <a name="resetDnsResolvers" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.resetDnsResolvers"></a>

```java
public void resetDnsResolvers()
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.resetTags"></a>

```java
public void resetTags()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a QuicksightVpcConnection resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.isConstruct"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_vpc_connection.QuicksightVpcConnection;

QuicksightVpcConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.isTerraformElement"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_vpc_connection.QuicksightVpcConnection;

QuicksightVpcConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.isTerraformResource"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_vpc_connection.QuicksightVpcConnection;

QuicksightVpcConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_vpc_connection.QuicksightVpcConnection;

QuicksightVpcConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),QuicksightVpcConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTF code for importing a QuicksightVpcConnection resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the QuicksightVpcConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing QuicksightVpcConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* com.hashicorp.cdktf.TerraformProvider

? Optional instance of the provider where the QuicksightVpcConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.cdktfStack">cdktfStack</a></code> | <code>com.hashicorp.cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>com.hashicorp.cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.availabilityStatus">availabilityStatus</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.tagsAll">tagsAll</a></code> | <code>com.hashicorp.cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference">QuicksightVpcConnectionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.dnsResolversInput">dnsResolversInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.securityGroupIdsInput">securityGroupIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.subnetIdsInput">subnetIdsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.timeoutsInput">timeoutsInput</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeouts">QuicksightVpcConnectionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.vpcConnectionIdInput">vpcConnectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.dnsResolvers">dnsResolvers</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.vpcConnectionId">vpcConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* com.hashicorp.cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* com.hashicorp.cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `availabilityStatus`<sup>Required</sup> <a name="availabilityStatus" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.availabilityStatus"></a>

```java
public java.lang.String getAvailabilityStatus();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.tagsAll"></a>

```java
public StringMap getTagsAll();
```

- *Type:* com.hashicorp.cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.timeouts"></a>

```java
public QuicksightVpcConnectionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference">QuicksightVpcConnectionTimeoutsOutputReference</a>

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `dnsResolversInput`<sup>Optional</sup> <a name="dnsResolversInput" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.dnsResolversInput"></a>

```java
public java.util.List<java.lang.String> getDnsResolversInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdsInput`<sup>Optional</sup> <a name="securityGroupIdsInput" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.securityGroupIdsInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdsInput`<sup>Optional</sup> <a name="subnetIdsInput" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.subnetIdsInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.timeoutsInput"></a>

```java
public java.lang.Object getTimeoutsInput();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeouts">QuicksightVpcConnectionTimeouts</a>

---

##### `vpcConnectionIdInput`<sup>Optional</sup> <a name="vpcConnectionIdInput" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.vpcConnectionIdInput"></a>

```java
public java.lang.String getVpcConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `dnsResolvers`<sup>Required</sup> <a name="dnsResolvers" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.dnsResolvers"></a>

```java
public java.util.List<java.lang.String> getDnsResolvers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `vpcConnectionId`<sup>Required</sup> <a name="vpcConnectionId" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.vpcConnectionId"></a>

```java
public java.lang.String getVpcConnectionId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### QuicksightVpcConnectionConfig <a name="QuicksightVpcConnectionConfig" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_vpc_connection.QuicksightVpcConnectionConfig;

QuicksightVpcConnectionConfig.builder()
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
    .roleArn(java.lang.String)
    .securityGroupIds(java.util.List<java.lang.String>)
    .subnetIds(java.util.List<java.lang.String>)
    .vpcConnectionId(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .dnsResolvers(java.util.List<java.lang.String>)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
//  .timeouts(QuicksightVpcConnectionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.connection">connection</a></code> | <code>com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.count">count</a></code> | <code>java.lang.Number OR com.hashicorp.cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<com.hashicorp.cdktf.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.forEach">forEach</a></code> | <code>com.hashicorp.cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>com.hashicorp.cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.provider">provider</a></code> | <code>com.hashicorp.cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#name QuicksightVpcConnection#name}. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#role_arn QuicksightVpcConnection#role_arn}. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.securityGroupIds">securityGroupIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#security_group_ids QuicksightVpcConnection#security_group_ids}. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.subnetIds">subnetIds</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#subnet_ids QuicksightVpcConnection#subnet_ids}. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.vpcConnectionId">vpcConnectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#vpc_connection_id QuicksightVpcConnection#vpc_connection_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#aws_account_id QuicksightVpcConnection#aws_account_id}. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.dnsResolvers">dnsResolvers</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#dns_resolvers QuicksightVpcConnection#dns_resolvers}. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#tags QuicksightVpcConnection#tags}. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeouts">QuicksightVpcConnectionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.connection"></a>

```java
public java.lang.Object getConnection();
```

- *Type:* com.hashicorp.cdktf.SSHProvisionerConnection OR com.hashicorp.cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.count"></a>

```java
public java.lang.Object getCount();
```

- *Type:* java.lang.Number OR com.hashicorp.cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<com.hashicorp.cdktf.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* com.hashicorp.cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* com.hashicorp.cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* com.hashicorp.cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.provisioners"></a>

```java
public java.lang.Object getProvisioners();
```

- *Type:* java.util.List<com.hashicorp.cdktf.FileProvisioner OR com.hashicorp.cdktf.LocalExecProvisioner OR com.hashicorp.cdktf.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#name QuicksightVpcConnection#name}.

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#role_arn QuicksightVpcConnection#role_arn}.

---

##### `securityGroupIds`<sup>Required</sup> <a name="securityGroupIds" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.securityGroupIds"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#security_group_ids QuicksightVpcConnection#security_group_ids}.

---

##### `subnetIds`<sup>Required</sup> <a name="subnetIds" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.subnetIds"></a>

```java
public java.util.List<java.lang.String> getSubnetIds();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#subnet_ids QuicksightVpcConnection#subnet_ids}.

---

##### `vpcConnectionId`<sup>Required</sup> <a name="vpcConnectionId" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.vpcConnectionId"></a>

```java
public java.lang.String getVpcConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#vpc_connection_id QuicksightVpcConnection#vpc_connection_id}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#aws_account_id QuicksightVpcConnection#aws_account_id}.

---

##### `dnsResolvers`<sup>Optional</sup> <a name="dnsResolvers" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.dnsResolvers"></a>

```java
public java.util.List<java.lang.String> getDnsResolvers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#dns_resolvers QuicksightVpcConnection#dns_resolvers}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#tags QuicksightVpcConnection#tags}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionConfig.property.timeouts"></a>

```java
public QuicksightVpcConnectionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeouts">QuicksightVpcConnectionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#timeouts QuicksightVpcConnection#timeouts}

---

### QuicksightVpcConnectionTimeouts <a name="QuicksightVpcConnectionTimeouts" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeouts.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_vpc_connection.QuicksightVpcConnectionTimeouts;

QuicksightVpcConnectionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#create QuicksightVpcConnection#create}

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours). Setting a timeout for a Delete operation is only applicable if changes are saved into state before the destroy operation occurs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#delete QuicksightVpcConnection#delete}

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

A string that can be [parsed as a duration](https://pkg.go.dev/time#ParseDuration) consisting of numbers and unit suffixes, such as "30s" or "2h45m". Valid time units are "s" (seconds), "m" (minutes), "h" (hours).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.23.1/docs/resources/quicksight_vpc_connection#update QuicksightVpcConnection#update}

---

## Classes <a name="Classes" id="Classes"></a>

### QuicksightVpcConnectionTimeoutsOutputReference <a name="QuicksightVpcConnectionTimeoutsOutputReference" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.Initializer"></a>

```java
import com.hashicorp.cdktf.providers.aws.quicksight_vpc_connection.QuicksightVpcConnectionTimeoutsOutputReference;

new QuicksightVpcConnectionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>com.hashicorp.cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* com.hashicorp.cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* com.hashicorp.cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeouts">QuicksightVpcConnectionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeoutsOutputReference.property.internalValue"></a>

```java
public java.lang.Object getInternalValue();
```

- *Type:* com.hashicorp.cdktf.IResolvable OR <a href="#@cdktf/provider-aws.quicksightVpcConnection.QuicksightVpcConnectionTimeouts">QuicksightVpcConnectionTimeouts</a>

---



