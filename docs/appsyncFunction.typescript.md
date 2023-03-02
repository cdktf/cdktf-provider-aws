# `appsyncFunction` Submodule <a name="`appsyncFunction` Submodule" id="@cdktf/provider-aws.appsyncFunction"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppsyncFunction <a name="AppsyncFunction" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/appsync_function aws_appsync_function}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer"></a>

```typescript
import { appsyncFunction } from '@cdktf/provider-aws'

new appsyncFunction.AppsyncFunction(scope: Construct, id: string, config: AppsyncFunctionConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig">AppsyncFunctionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig">AppsyncFunctionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putRuntime">putRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putSyncConfig">putSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetCode">resetCode</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetFunctionVersion">resetFunctionVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetMaxBatchSize">resetMaxBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetRequestMappingTemplate">resetRequestMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetResponseMappingTemplate">resetResponseMappingTemplate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetRuntime">resetRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetSyncConfig">resetSyncConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putRuntime` <a name="putRuntime" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putRuntime"></a>

```typescript
public putRuntime(value: AppsyncFunctionRuntime): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putRuntime.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a>

---

##### `putSyncConfig` <a name="putSyncConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putSyncConfig"></a>

```typescript
public putSyncConfig(value: AppsyncFunctionSyncConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.putSyncConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

---

##### `resetCode` <a name="resetCode" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetCode"></a>

```typescript
public resetCode(): void
```

##### `resetDescription` <a name="resetDescription" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetDescription"></a>

```typescript
public resetDescription(): void
```

##### `resetFunctionVersion` <a name="resetFunctionVersion" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetFunctionVersion"></a>

```typescript
public resetFunctionVersion(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetId"></a>

```typescript
public resetId(): void
```

##### `resetMaxBatchSize` <a name="resetMaxBatchSize" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetMaxBatchSize"></a>

```typescript
public resetMaxBatchSize(): void
```

##### `resetRequestMappingTemplate` <a name="resetRequestMappingTemplate" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetRequestMappingTemplate"></a>

```typescript
public resetRequestMappingTemplate(): void
```

##### `resetResponseMappingTemplate` <a name="resetResponseMappingTemplate" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetResponseMappingTemplate"></a>

```typescript
public resetResponseMappingTemplate(): void
```

##### `resetRuntime` <a name="resetRuntime" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetRuntime"></a>

```typescript
public resetRuntime(): void
```

##### `resetSyncConfig` <a name="resetSyncConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.resetSyncConfig"></a>

```typescript
public resetSyncConfig(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isConstruct"></a>

```typescript
import { appsyncFunction } from '@cdktf/provider-aws'

appsyncFunction.AppsyncFunction.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isTerraformElement"></a>

```typescript
import { appsyncFunction } from '@cdktf/provider-aws'

appsyncFunction.AppsyncFunction.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isTerraformResource"></a>

```typescript
import { appsyncFunction } from '@cdktf/provider-aws'

appsyncFunction.AppsyncFunction.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.functionId">functionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.runtime">runtime</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference">AppsyncFunctionRuntimeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference">AppsyncFunctionSyncConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.apiIdInput">apiIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.codeInput">codeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.dataSourceInput">dataSourceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.descriptionInput">descriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.functionVersionInput">functionVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.maxBatchSizeInput">maxBatchSizeInput</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.requestMappingTemplateInput">requestMappingTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.responseMappingTemplateInput">responseMappingTemplateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.runtimeInput">runtimeInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.syncConfigInput">syncConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.apiId">apiId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.code">code</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.dataSource">dataSource</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.functionVersion">functionVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.maxBatchSize">maxBatchSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.requestMappingTemplate">requestMappingTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.responseMappingTemplate">responseMappingTemplate</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `functionId`<sup>Required</sup> <a name="functionId" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.functionId"></a>

```typescript
public readonly functionId: string;
```

- *Type:* string

---

##### `runtime`<sup>Required</sup> <a name="runtime" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.runtime"></a>

```typescript
public readonly runtime: AppsyncFunctionRuntimeOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference">AppsyncFunctionRuntimeOutputReference</a>

---

##### `syncConfig`<sup>Required</sup> <a name="syncConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.syncConfig"></a>

```typescript
public readonly syncConfig: AppsyncFunctionSyncConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference">AppsyncFunctionSyncConfigOutputReference</a>

---

##### `apiIdInput`<sup>Optional</sup> <a name="apiIdInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.apiIdInput"></a>

```typescript
public readonly apiIdInput: string;
```

- *Type:* string

---

##### `codeInput`<sup>Optional</sup> <a name="codeInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.codeInput"></a>

```typescript
public readonly codeInput: string;
```

- *Type:* string

---

##### `dataSourceInput`<sup>Optional</sup> <a name="dataSourceInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.dataSourceInput"></a>

```typescript
public readonly dataSourceInput: string;
```

- *Type:* string

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.descriptionInput"></a>

```typescript
public readonly descriptionInput: string;
```

- *Type:* string

---

##### `functionVersionInput`<sup>Optional</sup> <a name="functionVersionInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.functionVersionInput"></a>

```typescript
public readonly functionVersionInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `maxBatchSizeInput`<sup>Optional</sup> <a name="maxBatchSizeInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.maxBatchSizeInput"></a>

```typescript
public readonly maxBatchSizeInput: number;
```

- *Type:* number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `requestMappingTemplateInput`<sup>Optional</sup> <a name="requestMappingTemplateInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.requestMappingTemplateInput"></a>

```typescript
public readonly requestMappingTemplateInput: string;
```

- *Type:* string

---

##### `responseMappingTemplateInput`<sup>Optional</sup> <a name="responseMappingTemplateInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.responseMappingTemplateInput"></a>

```typescript
public readonly responseMappingTemplateInput: string;
```

- *Type:* string

---

##### `runtimeInput`<sup>Optional</sup> <a name="runtimeInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.runtimeInput"></a>

```typescript
public readonly runtimeInput: AppsyncFunctionRuntime;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a>

---

##### `syncConfigInput`<sup>Optional</sup> <a name="syncConfigInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.syncConfigInput"></a>

```typescript
public readonly syncConfigInput: AppsyncFunctionSyncConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `functionVersion`<sup>Required</sup> <a name="functionVersion" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.functionVersion"></a>

```typescript
public readonly functionVersion: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `maxBatchSize`<sup>Required</sup> <a name="maxBatchSize" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.maxBatchSize"></a>

```typescript
public readonly maxBatchSize: number;
```

- *Type:* number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `requestMappingTemplate`<sup>Required</sup> <a name="requestMappingTemplate" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.requestMappingTemplate"></a>

```typescript
public readonly requestMappingTemplate: string;
```

- *Type:* string

---

##### `responseMappingTemplate`<sup>Required</sup> <a name="responseMappingTemplate" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.responseMappingTemplate"></a>

```typescript
public readonly responseMappingTemplate: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunction.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### AppsyncFunctionConfig <a name="AppsyncFunctionConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.Initializer"></a>

```typescript
import { appsyncFunction } from '@cdktf/provider-aws'

const appsyncFunctionConfig: appsyncFunction.AppsyncFunctionConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.apiId">apiId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#api_id AppsyncFunction#api_id}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.dataSource">dataSource</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#data_source AppsyncFunction#data_source}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#name AppsyncFunction#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.code">code</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#code AppsyncFunction#code}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.description">description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#description AppsyncFunction#description}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.functionVersion">functionVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#function_version AppsyncFunction#function_version}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#id AppsyncFunction#id}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.maxBatchSize">maxBatchSize</a></code> | <code>number</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#max_batch_size AppsyncFunction#max_batch_size}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.requestMappingTemplate">requestMappingTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#request_mapping_template AppsyncFunction#request_mapping_template}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.responseMappingTemplate">responseMappingTemplate</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#response_mapping_template AppsyncFunction#response_mapping_template}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.runtime">runtime</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a></code> | runtime block. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.syncConfig">syncConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a></code> | sync_config block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `apiId`<sup>Required</sup> <a name="apiId" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.apiId"></a>

```typescript
public readonly apiId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#api_id AppsyncFunction#api_id}.

---

##### `dataSource`<sup>Required</sup> <a name="dataSource" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.dataSource"></a>

```typescript
public readonly dataSource: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#data_source AppsyncFunction#data_source}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#name AppsyncFunction#name}.

---

##### `code`<sup>Optional</sup> <a name="code" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.code"></a>

```typescript
public readonly code: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#code AppsyncFunction#code}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#description AppsyncFunction#description}.

---

##### `functionVersion`<sup>Optional</sup> <a name="functionVersion" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.functionVersion"></a>

```typescript
public readonly functionVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#function_version AppsyncFunction#function_version}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#id AppsyncFunction#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `maxBatchSize`<sup>Optional</sup> <a name="maxBatchSize" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.maxBatchSize"></a>

```typescript
public readonly maxBatchSize: number;
```

- *Type:* number

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#max_batch_size AppsyncFunction#max_batch_size}.

---

##### `requestMappingTemplate`<sup>Optional</sup> <a name="requestMappingTemplate" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.requestMappingTemplate"></a>

```typescript
public readonly requestMappingTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#request_mapping_template AppsyncFunction#request_mapping_template}.

---

##### `responseMappingTemplate`<sup>Optional</sup> <a name="responseMappingTemplate" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.responseMappingTemplate"></a>

```typescript
public readonly responseMappingTemplate: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#response_mapping_template AppsyncFunction#response_mapping_template}.

---

##### `runtime`<sup>Optional</sup> <a name="runtime" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.runtime"></a>

```typescript
public readonly runtime: AppsyncFunctionRuntime;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a>

runtime block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#runtime AppsyncFunction#runtime}

---

##### `syncConfig`<sup>Optional</sup> <a name="syncConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionConfig.property.syncConfig"></a>

```typescript
public readonly syncConfig: AppsyncFunctionSyncConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

sync_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#sync_config AppsyncFunction#sync_config}

---

### AppsyncFunctionRuntime <a name="AppsyncFunctionRuntime" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime.Initializer"></a>

```typescript
import { appsyncFunction } from '@cdktf/provider-aws'

const appsyncFunctionRuntime: appsyncFunction.AppsyncFunctionRuntime = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#name AppsyncFunction#name}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#runtime_version AppsyncFunction#runtime_version}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#name AppsyncFunction#name}.

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#runtime_version AppsyncFunction#runtime_version}.

---

### AppsyncFunctionSyncConfig <a name="AppsyncFunctionSyncConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.Initializer"></a>

```typescript
import { appsyncFunction } from '@cdktf/provider-aws'

const appsyncFunctionSyncConfig: appsyncFunction.AppsyncFunctionSyncConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictDetection">conflictDetection</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#conflict_detection AppsyncFunction#conflict_detection}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictHandler">conflictHandler</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#conflict_handler AppsyncFunction#conflict_handler}. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.lambdaConflictHandlerConfig">lambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a></code> | lambda_conflict_handler_config block. |

---

##### `conflictDetection`<sup>Optional</sup> <a name="conflictDetection" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictDetection"></a>

```typescript
public readonly conflictDetection: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#conflict_detection AppsyncFunction#conflict_detection}.

---

##### `conflictHandler`<sup>Optional</sup> <a name="conflictHandler" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.conflictHandler"></a>

```typescript
public readonly conflictHandler: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#conflict_handler AppsyncFunction#conflict_handler}.

---

##### `lambdaConflictHandlerConfig`<sup>Optional</sup> <a name="lambdaConflictHandlerConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig.property.lambdaConflictHandlerConfig"></a>

```typescript
public readonly lambdaConflictHandlerConfig: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

lambda_conflict_handler_config block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#lambda_conflict_handler_config AppsyncFunction#lambda_conflict_handler_config}

---

### AppsyncFunctionSyncConfigLambdaConflictHandlerConfig <a name="AppsyncFunctionSyncConfigLambdaConflictHandlerConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig.Initializer"></a>

```typescript
import { appsyncFunction } from '@cdktf/provider-aws'

const appsyncFunctionSyncConfigLambdaConflictHandlerConfig: appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn">lambdaConflictHandlerArn</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#lambda_conflict_handler_arn AppsyncFunction#lambda_conflict_handler_arn}. |

---

##### `lambdaConflictHandlerArn`<sup>Optional</sup> <a name="lambdaConflictHandlerArn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig.property.lambdaConflictHandlerArn"></a>

```typescript
public readonly lambdaConflictHandlerArn: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/appsync_function#lambda_conflict_handler_arn AppsyncFunction#lambda_conflict_handler_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppsyncFunctionRuntimeOutputReference <a name="AppsyncFunctionRuntimeOutputReference" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer"></a>

```typescript
import { appsyncFunction } from '@cdktf/provider-aws'

new appsyncFunction.AppsyncFunctionRuntimeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.runtimeVersionInput">runtimeVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.runtimeVersion">runtimeVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `runtimeVersionInput`<sup>Optional</sup> <a name="runtimeVersionInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.runtimeVersionInput"></a>

```typescript
public readonly runtimeVersionInput: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `runtimeVersion`<sup>Required</sup> <a name="runtimeVersion" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.runtimeVersion"></a>

```typescript
public readonly runtimeVersion: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntimeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppsyncFunctionRuntime;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionRuntime">AppsyncFunctionRuntime</a>

---


### AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference <a name="AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer"></a>

```typescript
import { appsyncFunction } from '@cdktf/provider-aws'

new appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn">resetLambdaConflictHandlerArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetLambdaConflictHandlerArn` <a name="resetLambdaConflictHandlerArn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.resetLambdaConflictHandlerArn"></a>

```typescript
public resetLambdaConflictHandlerArn(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput">lambdaConflictHandlerArnInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn">lambdaConflictHandlerArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerArnInput`<sup>Optional</sup> <a name="lambdaConflictHandlerArnInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArnInput"></a>

```typescript
public readonly lambdaConflictHandlerArnInput: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerArn`<sup>Required</sup> <a name="lambdaConflictHandlerArn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.lambdaConflictHandlerArn"></a>

```typescript
public readonly lambdaConflictHandlerArn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

---


### AppsyncFunctionSyncConfigOutputReference <a name="AppsyncFunctionSyncConfigOutputReference" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer"></a>

```typescript
import { appsyncFunction } from '@cdktf/provider-aws'

new appsyncFunction.AppsyncFunctionSyncConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.putLambdaConflictHandlerConfig">putLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictDetection">resetConflictDetection</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictHandler">resetConflictHandler</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetLambdaConflictHandlerConfig">resetLambdaConflictHandlerConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLambdaConflictHandlerConfig` <a name="putLambdaConflictHandlerConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.putLambdaConflictHandlerConfig"></a>

```typescript
public putLambdaConflictHandlerConfig(value: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.putLambdaConflictHandlerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

---

##### `resetConflictDetection` <a name="resetConflictDetection" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictDetection"></a>

```typescript
public resetConflictDetection(): void
```

##### `resetConflictHandler` <a name="resetConflictHandler" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetConflictHandler"></a>

```typescript
public resetConflictHandler(): void
```

##### `resetLambdaConflictHandlerConfig` <a name="resetLambdaConflictHandlerConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.resetLambdaConflictHandlerConfig"></a>

```typescript
public resetLambdaConflictHandlerConfig(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfig">lambdaConflictHandlerConfig</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetectionInput">conflictDetectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandlerInput">conflictHandlerInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput">lambdaConflictHandlerConfigInput</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetection">conflictDetection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandler">conflictHandler</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerConfig`<sup>Required</sup> <a name="lambdaConflictHandlerConfig" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfig"></a>

```typescript
public readonly lambdaConflictHandlerConfig: AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference">AppsyncFunctionSyncConfigLambdaConflictHandlerConfigOutputReference</a>

---

##### `conflictDetectionInput`<sup>Optional</sup> <a name="conflictDetectionInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetectionInput"></a>

```typescript
public readonly conflictDetectionInput: string;
```

- *Type:* string

---

##### `conflictHandlerInput`<sup>Optional</sup> <a name="conflictHandlerInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandlerInput"></a>

```typescript
public readonly conflictHandlerInput: string;
```

- *Type:* string

---

##### `lambdaConflictHandlerConfigInput`<sup>Optional</sup> <a name="lambdaConflictHandlerConfigInput" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.lambdaConflictHandlerConfigInput"></a>

```typescript
public readonly lambdaConflictHandlerConfigInput: AppsyncFunctionSyncConfigLambdaConflictHandlerConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigLambdaConflictHandlerConfig">AppsyncFunctionSyncConfigLambdaConflictHandlerConfig</a>

---

##### `conflictDetection`<sup>Required</sup> <a name="conflictDetection" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictDetection"></a>

```typescript
public readonly conflictDetection: string;
```

- *Type:* string

---

##### `conflictHandler`<sup>Required</sup> <a name="conflictHandler" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.conflictHandler"></a>

```typescript
public readonly conflictHandler: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: AppsyncFunctionSyncConfig;
```

- *Type:* <a href="#@cdktf/provider-aws.appsyncFunction.AppsyncFunctionSyncConfig">AppsyncFunctionSyncConfig</a>

---



