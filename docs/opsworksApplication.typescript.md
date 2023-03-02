# `opsworksApplication` Submodule <a name="`opsworksApplication` Submodule" id="@cdktf/provider-aws.opsworksApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OpsworksApplication <a name="OpsworksApplication" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application aws_opsworks_application}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer"></a>

```typescript
import { opsworksApplication } from '@cdktf/provider-aws'

new opsworksApplication.OpsworksApplication(scope: Construct, id: string, config: OpsworksApplicationConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig">OpsworksApplicationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig">OpsworksApplicationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putAppSource">putAppSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putEnvironment">putEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putSslConfiguration">putSslConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAppSource">resetAppSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAutoBundleOnDeploy">resetAutoBundleOnDeploy</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAwsFlowRubySettings">resetAwsFlowRubySettings</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceArn">resetDataSourceArn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceDatabaseName">resetDataSourceDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceType">resetDataSourceType</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDocumentRoot">resetDocumentRoot</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDomains">resetDomains</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetEnableSsl">resetEnableSsl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetEnvironment">resetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetRailsEnv">resetRailsEnv</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetShortName">resetShortName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetSslConfiguration">resetSslConfiguration</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putAppSource` <a name="putAppSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putAppSource"></a>

```typescript
public putAppSource(value: IResolvable | OpsworksApplicationAppSource[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putAppSource.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a>[]

---

##### `putEnvironment` <a name="putEnvironment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putEnvironment"></a>

```typescript
public putEnvironment(value: IResolvable | OpsworksApplicationEnvironment[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putEnvironment.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a>[]

---

##### `putSslConfiguration` <a name="putSslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putSslConfiguration"></a>

```typescript
public putSslConfiguration(value: IResolvable | OpsworksApplicationSslConfiguration[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.putSslConfiguration.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a>[]

---

##### `resetAppSource` <a name="resetAppSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAppSource"></a>

```typescript
public resetAppSource(): void
```

##### `resetAutoBundleOnDeploy` <a name="resetAutoBundleOnDeploy" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAutoBundleOnDeploy"></a>

```typescript
public resetAutoBundleOnDeploy(): void
```

##### `resetAwsFlowRubySettings` <a name="resetAwsFlowRubySettings" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetAwsFlowRubySettings"></a>

```typescript
public resetAwsFlowRubySettings(): void
```

##### `resetDataSourceArn` <a name="resetDataSourceArn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceArn"></a>

```typescript
public resetDataSourceArn(): void
```

##### `resetDataSourceDatabaseName` <a name="resetDataSourceDatabaseName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceDatabaseName"></a>

```typescript
public resetDataSourceDatabaseName(): void
```

##### `resetDataSourceType` <a name="resetDataSourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDataSourceType"></a>

```typescript
public resetDataSourceType(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetDocumentRoot` <a name="resetDocumentRoot" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDocumentRoot"></a>

```typescript
public resetDocumentRoot(): void
```

##### `resetDomains` <a name="resetDomains" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetDomains"></a>

```typescript
public resetDomains(): void
```

##### `resetEnableSsl` <a name="resetEnableSsl" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetEnableSsl"></a>

```typescript
public resetEnableSsl(): void
```

##### `resetEnvironment` <a name="resetEnvironment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetEnvironment"></a>

```typescript
public resetEnvironment(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetId"></a>

```typescript
public resetId(): void
```

##### `resetRailsEnv` <a name="resetRailsEnv" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetRailsEnv"></a>

```typescript
public resetRailsEnv(): void
```

##### `resetShortName` <a name="resetShortName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetShortName"></a>

```typescript
public resetShortName(): void
```

##### `resetSslConfiguration` <a name="resetSslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.resetSslConfiguration"></a>

```typescript
public resetSslConfiguration(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isConstruct"></a>

```typescript
import { opsworksApplication } from '@cdktf/provider-aws'

opsworksApplication.OpsworksApplication.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformElement"></a>

```typescript
import { opsworksApplication } from '@cdktf/provider-aws'

opsworksApplication.OpsworksApplication.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformResource"></a>

```typescript
import { opsworksApplication } from '@cdktf/provider-aws'

opsworksApplication.OpsworksApplication.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.appSource">appSource</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList">OpsworksApplicationAppSourceList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.environment">environment</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList">OpsworksApplicationEnvironmentList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.sslConfiguration">sslConfiguration</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList">OpsworksApplicationSslConfigurationList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.appSourceInput">appSourceInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.autoBundleOnDeployInput">autoBundleOnDeployInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.awsFlowRubySettingsInput">awsFlowRubySettingsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceArnInput">dataSourceArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceDatabaseNameInput">dataSourceDatabaseNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceTypeInput">dataSourceTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.documentRootInput">documentRootInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.domainsInput">domainsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.enableSslInput">enableSslInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.environmentInput">environmentInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.railsEnvInput">railsEnvInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.shortNameInput">shortNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.sslConfigurationInput">sslConfigurationInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.stackIdInput">stackIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.autoBundleOnDeploy">autoBundleOnDeploy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.awsFlowRubySettings">awsFlowRubySettings</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceArn">dataSourceArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceDatabaseName">dataSourceDatabaseName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceType">dataSourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.documentRoot">documentRoot</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.domains">domains</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.enableSsl">enableSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.railsEnv">railsEnv</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.shortName">shortName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.stackId">stackId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.type">type</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `appSource`<sup>Required</sup> <a name="appSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.appSource"></a>

```typescript
public readonly appSource: OpsworksApplicationAppSourceList;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList">OpsworksApplicationAppSourceList</a>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.environment"></a>

```typescript
public readonly environment: OpsworksApplicationEnvironmentList;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList">OpsworksApplicationEnvironmentList</a>

---

##### `sslConfiguration`<sup>Required</sup> <a name="sslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.sslConfiguration"></a>

```typescript
public readonly sslConfiguration: OpsworksApplicationSslConfigurationList;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList">OpsworksApplicationSslConfigurationList</a>

---

##### `appSourceInput`<sup>Optional</sup> <a name="appSourceInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.appSourceInput"></a>

```typescript
public readonly appSourceInput: IResolvable | OpsworksApplicationAppSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a>[]

---

##### `autoBundleOnDeployInput`<sup>Optional</sup> <a name="autoBundleOnDeployInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.autoBundleOnDeployInput"></a>

```typescript
public readonly autoBundleOnDeployInput: string;
```

- *Type:* string

---

##### `awsFlowRubySettingsInput`<sup>Optional</sup> <a name="awsFlowRubySettingsInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.awsFlowRubySettingsInput"></a>

```typescript
public readonly awsFlowRubySettingsInput: string;
```

- *Type:* string

---

##### `dataSourceArnInput`<sup>Optional</sup> <a name="dataSourceArnInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceArnInput"></a>

```typescript
public readonly dataSourceArnInput: string;
```

- *Type:* string

---

##### `dataSourceDatabaseNameInput`<sup>Optional</sup> <a name="dataSourceDatabaseNameInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceDatabaseNameInput"></a>

```typescript
public readonly dataSourceDatabaseNameInput: string;
```

- *Type:* string

---

##### `dataSourceTypeInput`<sup>Optional</sup> <a name="dataSourceTypeInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceTypeInput"></a>

```typescript
public readonly dataSourceTypeInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `documentRootInput`<sup>Optional</sup> <a name="documentRootInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.documentRootInput"></a>

```typescript
public readonly documentRootInput: string;
```

- *Type:* string

---

##### `domainsInput`<sup>Optional</sup> <a name="domainsInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.domainsInput"></a>

```typescript
public readonly domainsInput: string[];
```

- *Type:* string[]

---

##### `enableSslInput`<sup>Optional</sup> <a name="enableSslInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.enableSslInput"></a>

```typescript
public readonly enableSslInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.environmentInput"></a>

```typescript
public readonly environmentInput: IResolvable | OpsworksApplicationEnvironment[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `railsEnvInput`<sup>Optional</sup> <a name="railsEnvInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.railsEnvInput"></a>

```typescript
public readonly railsEnvInput: string;
```

- *Type:* string

---

##### `shortNameInput`<sup>Optional</sup> <a name="shortNameInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.shortNameInput"></a>

```typescript
public readonly shortNameInput: string;
```

- *Type:* string

---

##### `sslConfigurationInput`<sup>Optional</sup> <a name="sslConfigurationInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.sslConfigurationInput"></a>

```typescript
public readonly sslConfigurationInput: IResolvable | OpsworksApplicationSslConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a>[]

---

##### `stackIdInput`<sup>Optional</sup> <a name="stackIdInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.stackIdInput"></a>

```typescript
public readonly stackIdInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `autoBundleOnDeploy`<sup>Required</sup> <a name="autoBundleOnDeploy" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.autoBundleOnDeploy"></a>

```typescript
public readonly autoBundleOnDeploy: string;
```

- *Type:* string

---

##### `awsFlowRubySettings`<sup>Required</sup> <a name="awsFlowRubySettings" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.awsFlowRubySettings"></a>

```typescript
public readonly awsFlowRubySettings: string;
```

- *Type:* string

---

##### `dataSourceArn`<sup>Required</sup> <a name="dataSourceArn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceArn"></a>

```typescript
public readonly dataSourceArn: string;
```

- *Type:* string

---

##### `dataSourceDatabaseName`<sup>Required</sup> <a name="dataSourceDatabaseName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceDatabaseName"></a>

```typescript
public readonly dataSourceDatabaseName: string;
```

- *Type:* string

---

##### `dataSourceType`<sup>Required</sup> <a name="dataSourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.dataSourceType"></a>

```typescript
public readonly dataSourceType: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `documentRoot`<sup>Required</sup> <a name="documentRoot" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.documentRoot"></a>

```typescript
public readonly documentRoot: string;
```

- *Type:* string

---

##### `domains`<sup>Required</sup> <a name="domains" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

---

##### `enableSsl`<sup>Required</sup> <a name="enableSsl" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.enableSsl"></a>

```typescript
public readonly enableSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `railsEnv`<sup>Required</sup> <a name="railsEnv" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.railsEnv"></a>

```typescript
public readonly railsEnv: string;
```

- *Type:* string

---

##### `shortName`<sup>Required</sup> <a name="shortName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplication.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### OpsworksApplicationAppSource <a name="OpsworksApplicationAppSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.Initializer"></a>

```typescript
import { opsworksApplication } from '@cdktf/provider-aws'

const opsworksApplicationAppSource: opsworksApplication.OpsworksApplicationAppSource = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#type OpsworksApplication#type}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.password">password</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#password OpsworksApplication#password}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.revision">revision</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#revision OpsworksApplication#revision}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.sshKey">sshKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#ssh_key OpsworksApplication#ssh_key}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.url">url</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#url OpsworksApplication#url}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.username">username</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#username OpsworksApplication#username}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#type OpsworksApplication#type}.

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#password OpsworksApplication#password}.

---

##### `revision`<sup>Optional</sup> <a name="revision" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#revision OpsworksApplication#revision}.

---

##### `sshKey`<sup>Optional</sup> <a name="sshKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.sshKey"></a>

```typescript
public readonly sshKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#ssh_key OpsworksApplication#ssh_key}.

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#url OpsworksApplication#url}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#username OpsworksApplication#username}.

---

### OpsworksApplicationConfig <a name="OpsworksApplicationConfig" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.Initializer"></a>

```typescript
import { opsworksApplication } from '@cdktf/provider-aws'

const opsworksApplicationConfig: opsworksApplication.OpsworksApplicationConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#name OpsworksApplication#name}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.stackId">stackId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#stack_id OpsworksApplication#stack_id}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.type">type</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#type OpsworksApplication#type}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.appSource">appSource</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a>[]</code> | app_source block. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.autoBundleOnDeploy">autoBundleOnDeploy</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#auto_bundle_on_deploy OpsworksApplication#auto_bundle_on_deploy}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.awsFlowRubySettings">awsFlowRubySettings</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#aws_flow_ruby_settings OpsworksApplication#aws_flow_ruby_settings}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceArn">dataSourceArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_arn OpsworksApplication#data_source_arn}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceDatabaseName">dataSourceDatabaseName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_database_name OpsworksApplication#data_source_database_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceType">dataSourceType</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_type OpsworksApplication#data_source_type}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#description OpsworksApplication#description}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.documentRoot">documentRoot</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#document_root OpsworksApplication#document_root}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.domains">domains</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#domains OpsworksApplication#domains}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.enableSsl">enableSsl</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#enable_ssl OpsworksApplication#enable_ssl}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.environment">environment</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a>[]</code> | environment block. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#id OpsworksApplication#id}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.railsEnv">railsEnv</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#rails_env OpsworksApplication#rails_env}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.shortName">shortName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#short_name OpsworksApplication#short_name}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.sslConfiguration">sslConfiguration</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a>[]</code> | ssl_configuration block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#name OpsworksApplication#name}.

---

##### `stackId`<sup>Required</sup> <a name="stackId" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.stackId"></a>

```typescript
public readonly stackId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#stack_id OpsworksApplication#stack_id}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#type OpsworksApplication#type}.

---

##### `appSource`<sup>Optional</sup> <a name="appSource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.appSource"></a>

```typescript
public readonly appSource: IResolvable | OpsworksApplicationAppSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a>[]

app_source block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#app_source OpsworksApplication#app_source}

---

##### `autoBundleOnDeploy`<sup>Optional</sup> <a name="autoBundleOnDeploy" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.autoBundleOnDeploy"></a>

```typescript
public readonly autoBundleOnDeploy: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#auto_bundle_on_deploy OpsworksApplication#auto_bundle_on_deploy}.

---

##### `awsFlowRubySettings`<sup>Optional</sup> <a name="awsFlowRubySettings" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.awsFlowRubySettings"></a>

```typescript
public readonly awsFlowRubySettings: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#aws_flow_ruby_settings OpsworksApplication#aws_flow_ruby_settings}.

---

##### `dataSourceArn`<sup>Optional</sup> <a name="dataSourceArn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceArn"></a>

```typescript
public readonly dataSourceArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_arn OpsworksApplication#data_source_arn}.

---

##### `dataSourceDatabaseName`<sup>Optional</sup> <a name="dataSourceDatabaseName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceDatabaseName"></a>

```typescript
public readonly dataSourceDatabaseName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_database_name OpsworksApplication#data_source_database_name}.

---

##### `dataSourceType`<sup>Optional</sup> <a name="dataSourceType" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.dataSourceType"></a>

```typescript
public readonly dataSourceType: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#data_source_type OpsworksApplication#data_source_type}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#description OpsworksApplication#description}.

---

##### `documentRoot`<sup>Optional</sup> <a name="documentRoot" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.documentRoot"></a>

```typescript
public readonly documentRoot: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#document_root OpsworksApplication#document_root}.

---

##### `domains`<sup>Optional</sup> <a name="domains" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.domains"></a>

```typescript
public readonly domains: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#domains OpsworksApplication#domains}.

---

##### `enableSsl`<sup>Optional</sup> <a name="enableSsl" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.enableSsl"></a>

```typescript
public readonly enableSsl: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#enable_ssl OpsworksApplication#enable_ssl}.

---

##### `environment`<sup>Optional</sup> <a name="environment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.environment"></a>

```typescript
public readonly environment: IResolvable | OpsworksApplicationEnvironment[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a>[]

environment block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#environment OpsworksApplication#environment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#id OpsworksApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `railsEnv`<sup>Optional</sup> <a name="railsEnv" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.railsEnv"></a>

```typescript
public readonly railsEnv: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#rails_env OpsworksApplication#rails_env}.

---

##### `shortName`<sup>Optional</sup> <a name="shortName" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.shortName"></a>

```typescript
public readonly shortName: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#short_name OpsworksApplication#short_name}.

---

##### `sslConfiguration`<sup>Optional</sup> <a name="sslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationConfig.property.sslConfiguration"></a>

```typescript
public readonly sslConfiguration: IResolvable | OpsworksApplicationSslConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a>[]

ssl_configuration block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#ssl_configuration OpsworksApplication#ssl_configuration}

---

### OpsworksApplicationEnvironment <a name="OpsworksApplicationEnvironment" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.Initializer"></a>

```typescript
import { opsworksApplication } from '@cdktf/provider-aws'

const opsworksApplicationEnvironment: opsworksApplication.OpsworksApplicationEnvironment = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.key">key</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#key OpsworksApplication#key}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.value">value</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#value OpsworksApplication#value}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.secure">secure</a></code> | <code>boolean \| cdktf.IResolvable</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#secure OpsworksApplication#secure}. |

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#key OpsworksApplication#key}.

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#value OpsworksApplication#value}.

---

##### `secure`<sup>Optional</sup> <a name="secure" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment.property.secure"></a>

```typescript
public readonly secure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#secure OpsworksApplication#secure}.

---

### OpsworksApplicationSslConfiguration <a name="OpsworksApplicationSslConfiguration" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.Initializer"></a>

```typescript
import { opsworksApplication } from '@cdktf/provider-aws'

const opsworksApplicationSslConfiguration: opsworksApplication.OpsworksApplicationSslConfiguration = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.certificate">certificate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#certificate OpsworksApplication#certificate}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.privateKey">privateKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#private_key OpsworksApplication#private_key}. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.chain">chain</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#chain OpsworksApplication#chain}. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#certificate OpsworksApplication#certificate}.

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#private_key OpsworksApplication#private_key}.

---

##### `chain`<sup>Optional</sup> <a name="chain" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration.property.chain"></a>

```typescript
public readonly chain: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/opsworks_application#chain OpsworksApplication#chain}.

---

## Classes <a name="Classes" id="Classes"></a>

### OpsworksApplicationAppSourceList <a name="OpsworksApplicationAppSourceList" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer"></a>

```typescript
import { opsworksApplication } from '@cdktf/provider-aws'

new opsworksApplication.OpsworksApplicationAppSourceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.get"></a>

```typescript
public get(index: number): OpsworksApplicationAppSourceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksApplicationAppSource[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a>[]

---


### OpsworksApplicationAppSourceOutputReference <a name="OpsworksApplicationAppSourceOutputReference" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer"></a>

```typescript
import { opsworksApplication } from '@cdktf/provider-aws'

new opsworksApplication.OpsworksApplicationAppSourceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetRevision">resetRevision</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetSshKey">resetSshKey</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetUrl">resetUrl</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetPassword"></a>

```typescript
public resetPassword(): void
```

##### `resetRevision` <a name="resetRevision" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetRevision"></a>

```typescript
public resetRevision(): void
```

##### `resetSshKey` <a name="resetSshKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetSshKey"></a>

```typescript
public resetSshKey(): void
```

##### `resetUrl` <a name="resetUrl" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetUrl"></a>

```typescript
public resetUrl(): void
```

##### `resetUsername` <a name="resetUsername" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.resetUsername"></a>

```typescript
public resetUsername(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.passwordInput">passwordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.revisionInput">revisionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.sshKeyInput">sshKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.typeInput">typeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.urlInput">urlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.usernameInput">usernameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.password">password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.revision">revision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.sshKey">sshKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.url">url</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.username">username</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.passwordInput"></a>

```typescript
public readonly passwordInput: string;
```

- *Type:* string

---

##### `revisionInput`<sup>Optional</sup> <a name="revisionInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.revisionInput"></a>

```typescript
public readonly revisionInput: string;
```

- *Type:* string

---

##### `sshKeyInput`<sup>Optional</sup> <a name="sshKeyInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.sshKeyInput"></a>

```typescript
public readonly sshKeyInput: string;
```

- *Type:* string

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.typeInput"></a>

```typescript
public readonly typeInput: string;
```

- *Type:* string

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.urlInput"></a>

```typescript
public readonly urlInput: string;
```

- *Type:* string

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.usernameInput"></a>

```typescript
public readonly usernameInput: string;
```

- *Type:* string

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.password"></a>

```typescript
public readonly password: string;
```

- *Type:* string

---

##### `revision`<sup>Required</sup> <a name="revision" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.revision"></a>

```typescript
public readonly revision: string;
```

- *Type:* string

---

##### `sshKey`<sup>Required</sup> <a name="sshKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.sshKey"></a>

```typescript
public readonly sshKey: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.url"></a>

```typescript
public readonly url: string;
```

- *Type:* string

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.username"></a>

```typescript
public readonly username: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSourceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksApplicationAppSource | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationAppSource">OpsworksApplicationAppSource</a> | cdktf.IResolvable

---


### OpsworksApplicationEnvironmentList <a name="OpsworksApplicationEnvironmentList" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer"></a>

```typescript
import { opsworksApplication } from '@cdktf/provider-aws'

new opsworksApplication.OpsworksApplicationEnvironmentList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.get"></a>

```typescript
public get(index: number): OpsworksApplicationEnvironmentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksApplicationEnvironment[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a>[]

---


### OpsworksApplicationEnvironmentOutputReference <a name="OpsworksApplicationEnvironmentOutputReference" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer"></a>

```typescript
import { opsworksApplication } from '@cdktf/provider-aws'

new opsworksApplication.OpsworksApplicationEnvironmentOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resetSecure">resetSecure</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecure` <a name="resetSecure" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.resetSecure"></a>

```typescript
public resetSecure(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.keyInput">keyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.secureInput">secureInput</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.valueInput">valueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.key">key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.secure">secure</a></code> | <code>boolean \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.value">value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.keyInput"></a>

```typescript
public readonly keyInput: string;
```

- *Type:* string

---

##### `secureInput`<sup>Optional</sup> <a name="secureInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.secureInput"></a>

```typescript
public readonly secureInput: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.valueInput"></a>

```typescript
public readonly valueInput: string;
```

- *Type:* string

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.key"></a>

```typescript
public readonly key: string;
```

- *Type:* string

---

##### `secure`<sup>Required</sup> <a name="secure" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.secure"></a>

```typescript
public readonly secure: boolean | IResolvable;
```

- *Type:* boolean | cdktf.IResolvable

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.value"></a>

```typescript
public readonly value: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironmentOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksApplicationEnvironment | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationEnvironment">OpsworksApplicationEnvironment</a> | cdktf.IResolvable

---


### OpsworksApplicationSslConfigurationList <a name="OpsworksApplicationSslConfigurationList" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer"></a>

```typescript
import { opsworksApplication } from '@cdktf/provider-aws'

new opsworksApplication.OpsworksApplicationSslConfigurationList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.get"></a>

```typescript
public get(index: number): OpsworksApplicationSslConfigurationOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | OpsworksApplicationSslConfiguration[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a>[]

---


### OpsworksApplicationSslConfigurationOutputReference <a name="OpsworksApplicationSslConfigurationOutputReference" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer"></a>

```typescript
import { opsworksApplication } from '@cdktf/provider-aws'

new opsworksApplication.OpsworksApplicationSslConfigurationOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resetChain">resetChain</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetChain` <a name="resetChain" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.resetChain"></a>

```typescript
public resetChain(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.certificateInput">certificateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.chainInput">chainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.privateKeyInput">privateKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.certificate">certificate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.chain">chain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.privateKey">privateKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.certificateInput"></a>

```typescript
public readonly certificateInput: string;
```

- *Type:* string

---

##### `chainInput`<sup>Optional</sup> <a name="chainInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.chainInput"></a>

```typescript
public readonly chainInput: string;
```

- *Type:* string

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.privateKeyInput"></a>

```typescript
public readonly privateKeyInput: string;
```

- *Type:* string

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.certificate"></a>

```typescript
public readonly certificate: string;
```

- *Type:* string

---

##### `chain`<sup>Required</sup> <a name="chain" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.chain"></a>

```typescript
public readonly chain: string;
```

- *Type:* string

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.privateKey"></a>

```typescript
public readonly privateKey: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfigurationOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: OpsworksApplicationSslConfiguration | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.opsworksApplication.OpsworksApplicationSslConfiguration">OpsworksApplicationSslConfiguration</a> | cdktf.IResolvable

---



