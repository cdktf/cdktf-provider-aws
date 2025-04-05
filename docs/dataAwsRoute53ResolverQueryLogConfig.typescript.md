# `dataAwsRoute53ResolverQueryLogConfig` Submodule <a name="`dataAwsRoute53ResolverQueryLogConfig` Submodule" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsRoute53ResolverQueryLogConfig <a name="DataAwsRoute53ResolverQueryLogConfig" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/route53_resolver_query_log_config aws_route53_resolver_query_log_config}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer"></a>

```typescript
import { dataAwsRoute53ResolverQueryLogConfig } from '@cdktf/provider-aws'

new dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig(scope: Construct, id: string, config?: DataAwsRoute53ResolverQueryLogConfigConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig">DataAwsRoute53ResolverQueryLogConfigConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig">DataAwsRoute53ResolverQueryLogConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetResolverQueryLogConfigId">resetResolverQueryLogConfigId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putFilter` <a name="putFilter" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.putFilter"></a>

```typescript
public putFilter(value: IResolvable | DataAwsRoute53ResolverQueryLogConfigFilter[]): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.putFilter.parameter.value"></a>

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a>[]

---

##### `resetFilter` <a name="resetFilter" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetName"></a>

```typescript
public resetName(): void
```

##### `resetResolverQueryLogConfigId` <a name="resetResolverQueryLogConfigId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetResolverQueryLogConfigId"></a>

```typescript
public resetResolverQueryLogConfigId(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.resetTags"></a>

```typescript
public resetTags(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTF code for importing a DataAwsRoute53ResolverQueryLogConfig resource upon running "cdktf plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isConstruct"></a>

```typescript
import { dataAwsRoute53ResolverQueryLogConfig } from '@cdktf/provider-aws'

dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformElement"></a>

```typescript
import { dataAwsRoute53ResolverQueryLogConfig } from '@cdktf/provider-aws'

dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformDataSource"></a>

```typescript
import { dataAwsRoute53ResolverQueryLogConfig } from '@cdktf/provider-aws'

dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.generateConfigForImport"></a>

```typescript
import { dataAwsRoute53ResolverQueryLogConfig } from '@cdktf/provider-aws'

dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTF code for importing a DataAwsRoute53ResolverQueryLogConfig resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataAwsRoute53ResolverQueryLogConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataAwsRoute53ResolverQueryLogConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/route53_resolver_query_log_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataAwsRoute53ResolverQueryLogConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.arn">arn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.destinationArn">destinationArn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.filter">filter</a></code> | <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList">DataAwsRoute53ResolverQueryLogConfigFilterList</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.ownerId">ownerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.shareStatus">shareStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.filterInput">filterInput</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a>[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.resolverQueryLogConfigIdInput">resolverQueryLogConfigIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.resolverQueryLogConfigId">resolverQueryLogConfigId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.arn"></a>

```typescript
public readonly arn: string;
```

- *Type:* string

---

##### `destinationArn`<sup>Required</sup> <a name="destinationArn" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.destinationArn"></a>

```typescript
public readonly destinationArn: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.filter"></a>

```typescript
public readonly filter: DataAwsRoute53ResolverQueryLogConfigFilterList;
```

- *Type:* <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList">DataAwsRoute53ResolverQueryLogConfigFilterList</a>

---

##### `ownerId`<sup>Required</sup> <a name="ownerId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.ownerId"></a>

```typescript
public readonly ownerId: string;
```

- *Type:* string

---

##### `shareStatus`<sup>Required</sup> <a name="shareStatus" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.shareStatus"></a>

```typescript
public readonly shareStatus: string;
```

- *Type:* string

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.filterInput"></a>

```typescript
public readonly filterInput: IResolvable | DataAwsRoute53ResolverQueryLogConfigFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a>[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `resolverQueryLogConfigIdInput`<sup>Optional</sup> <a name="resolverQueryLogConfigIdInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.resolverQueryLogConfigIdInput"></a>

```typescript
public readonly resolverQueryLogConfigIdInput: string;
```

- *Type:* string

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `resolverQueryLogConfigId`<sup>Required</sup> <a name="resolverQueryLogConfigId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.resolverQueryLogConfigId"></a>

```typescript
public readonly resolverQueryLogConfigId: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfig.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsRoute53ResolverQueryLogConfigConfig <a name="DataAwsRoute53ResolverQueryLogConfigConfig" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.Initializer"></a>

```typescript
import { dataAwsRoute53ResolverQueryLogConfig } from '@cdktf/provider-aws'

const dataAwsRoute53ResolverQueryLogConfigConfig: dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.count">count</a></code> | <code>number \| cdktf.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.filter">filter</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a>[]</code> | filter block. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/route53_resolver_query_log_config#id DataAwsRoute53ResolverQueryLogConfig#id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/route53_resolver_query_log_config#name DataAwsRoute53ResolverQueryLogConfig#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.resolverQueryLogConfigId">resolverQueryLogConfigId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/route53_resolver_query_log_config#resolver_query_log_config_id DataAwsRoute53ResolverQueryLogConfig#resolver_query_log_config_id}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/route53_resolver_query_log_config#tags DataAwsRoute53ResolverQueryLogConfig#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktf.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.filter"></a>

```typescript
public readonly filter: IResolvable | DataAwsRoute53ResolverQueryLogConfigFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a>[]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/route53_resolver_query_log_config#filter DataAwsRoute53ResolverQueryLogConfig#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/route53_resolver_query_log_config#id DataAwsRoute53ResolverQueryLogConfig#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/route53_resolver_query_log_config#name DataAwsRoute53ResolverQueryLogConfig#name}.

---

##### `resolverQueryLogConfigId`<sup>Optional</sup> <a name="resolverQueryLogConfigId" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.resolverQueryLogConfigId"></a>

```typescript
public readonly resolverQueryLogConfigId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/route53_resolver_query_log_config#resolver_query_log_config_id DataAwsRoute53ResolverQueryLogConfig#resolver_query_log_config_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/route53_resolver_query_log_config#tags DataAwsRoute53ResolverQueryLogConfig#tags}.

---

### DataAwsRoute53ResolverQueryLogConfigFilter <a name="DataAwsRoute53ResolverQueryLogConfigFilter" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter.Initializer"></a>

```typescript
import { dataAwsRoute53ResolverQueryLogConfig } from '@cdktf/provider-aws'

const dataAwsRoute53ResolverQueryLogConfigFilter: dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/route53_resolver_query_log_config#name DataAwsRoute53ResolverQueryLogConfig#name}. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter.property.values">values</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/route53_resolver_query_log_config#values DataAwsRoute53ResolverQueryLogConfig#values}. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/route53_resolver_query_log_config#name DataAwsRoute53ResolverQueryLogConfig#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/aws/5.94.1/docs/data-sources/route53_resolver_query_log_config#values DataAwsRoute53ResolverQueryLogConfig#values}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataAwsRoute53ResolverQueryLogConfigFilterList <a name="DataAwsRoute53ResolverQueryLogConfigFilterList" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer"></a>

```typescript
import { dataAwsRoute53ResolverQueryLogConfig } from '@cdktf/provider-aws'

new dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.get"></a>

```typescript
public get(index: number): DataAwsRoute53ResolverQueryLogConfigFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a>[]</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterList.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsRoute53ResolverQueryLogConfigFilter[];
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a>[]

---


### DataAwsRoute53ResolverQueryLogConfigFilterOutputReference <a name="DataAwsRoute53ResolverQueryLogConfigFilterOutputReference" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer"></a>

```typescript
import { dataAwsRoute53ResolverQueryLogConfig } from '@cdktf/provider-aws'

new dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.valuesInput">valuesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.values">values</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.internalValue">internalValue</a></code> | <code>cdktf.IResolvable \| <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.valuesInput"></a>

```typescript
public readonly valuesInput: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.values"></a>

```typescript
public readonly values: string[];
```

- *Type:* string[]

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilterOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: IResolvable | DataAwsRoute53ResolverQueryLogConfigFilter;
```

- *Type:* cdktf.IResolvable | <a href="#@cdktf/provider-aws.dataAwsRoute53ResolverQueryLogConfig.DataAwsRoute53ResolverQueryLogConfigFilter">DataAwsRoute53ResolverQueryLogConfigFilter</a>

---



