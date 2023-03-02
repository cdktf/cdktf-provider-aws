# `serverlessapplicationrepositoryCloudformationStack` Submodule <a name="`serverlessapplicationrepositoryCloudformationStack` Submodule" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServerlessapplicationrepositoryCloudformationStack <a name="ServerlessapplicationrepositoryCloudformationStack" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack"></a>

Represents a {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack aws_serverlessapplicationrepository_cloudformation_stack}.

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer"></a>

```typescript
import { serverlessapplicationrepositoryCloudformationStack } from '@cdktf/provider-aws'

new serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack(scope: Construct, id: string, config: ServerlessapplicationrepositoryCloudformationStackConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig">ServerlessapplicationrepositoryCloudformationStackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig">ServerlessapplicationrepositoryCloudformationStackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetParameters">resetParameters</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetSemanticVersion">resetSemanticVersion</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTags">resetTags</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTagsAll">resetTagsAll</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `addOverride` <a name="addOverride" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toMetadata` <a name="toMetadata" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.putTimeouts"></a>

```typescript
public putTimeouts(value: ServerlessapplicationrepositoryCloudformationStackTimeouts): void
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a>

---

##### `resetId` <a name="resetId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetId"></a>

```typescript
public resetId(): void
```

##### `resetParameters` <a name="resetParameters" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetParameters"></a>

```typescript
public resetParameters(): void
```

##### `resetSemanticVersion` <a name="resetSemanticVersion" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetSemanticVersion"></a>

```typescript
public resetSemanticVersion(): void
```

##### `resetTags` <a name="resetTags" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTags"></a>

```typescript
public resetTags(): void
```

##### `resetTagsAll` <a name="resetTagsAll" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTagsAll"></a>

```typescript
public resetTagsAll(): void
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.resetTimeouts"></a>

```typescript
public resetTimeouts(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformResource">isTerraformResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isConstruct"></a>

```typescript
import { serverlessapplicationrepositoryCloudformationStack } from '@cdktf/provider-aws'

serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformElement"></a>

```typescript
import { serverlessapplicationrepositoryCloudformationStack } from '@cdktf/provider-aws'

serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformResource"></a>

```typescript
import { serverlessapplicationrepositoryCloudformationStack } from '@cdktf/provider-aws'

serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformResource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.isTerraformResource.parameter.x"></a>

- *Type:* any

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.cdktfStack">cdktfStack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.outputs">outputs</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference">ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.applicationIdInput">applicationIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.capabilitiesInput">capabilitiesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.parametersInput">parametersInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.semanticVersionInput">semanticVersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsAllInput">tagsAllInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsInput">tagsInput</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.timeoutsInput">timeoutsInput</a></code> | <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.applicationId">applicationId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.capabilities">capabilities</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.semanticVersion">semanticVersion</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `outputs`<sup>Required</sup> <a name="outputs" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.outputs"></a>

```typescript
public readonly outputs: StringMap;
```

- *Type:* cdktf.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.timeouts"></a>

```typescript
public readonly timeouts: ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference;
```

- *Type:* <a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference">ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.applicationIdInput"></a>

```typescript
public readonly applicationIdInput: string;
```

- *Type:* string

---

##### `capabilitiesInput`<sup>Optional</sup> <a name="capabilitiesInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.capabilitiesInput"></a>

```typescript
public readonly capabilitiesInput: string[];
```

- *Type:* string[]

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.parametersInput"></a>

```typescript
public readonly parametersInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `semanticVersionInput`<sup>Optional</sup> <a name="semanticVersionInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.semanticVersionInput"></a>

```typescript
public readonly semanticVersionInput: string;
```

- *Type:* string

---

##### `tagsAllInput`<sup>Optional</sup> <a name="tagsAllInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsAllInput"></a>

```typescript
public readonly tagsAllInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsInput"></a>

```typescript
public readonly tagsInput: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.timeoutsInput"></a>

```typescript
public readonly timeoutsInput: ServerlessapplicationrepositoryCloudformationStackTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a> | cdktf.IResolvable

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `semanticVersion`<sup>Required</sup> <a name="semanticVersion" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.semanticVersion"></a>

```typescript
public readonly semanticVersion: string;
```

- *Type:* string

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

##### `tagsAll`<sup>Required</sup> <a name="tagsAll" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStack.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ServerlessapplicationrepositoryCloudformationStackConfig <a name="ServerlessapplicationrepositoryCloudformationStackConfig" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.Initializer"></a>

```typescript
import { serverlessapplicationrepositoryCloudformationStack } from '@cdktf/provider-aws'

const serverlessapplicationrepositoryCloudformationStackConfig: serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.connection">connection</a></code> | <code>cdktf.SSHProvisionerConnection \| cdktf.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.count">count</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.dependsOn">dependsOn</a></code> | <code>cdktf.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.forEach">forEach</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.provisioners">provisioners</a></code> | <code>cdktf.FileProvisioner \| cdktf.LocalExecProvisioner \| cdktf.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.applicationId">applicationId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#application_id ServerlessapplicationrepositoryCloudformationStack#application_id}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.capabilities">capabilities</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#capabilities ServerlessapplicationrepositoryCloudformationStack#capabilities}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.name">name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#name ServerlessapplicationrepositoryCloudformationStack#name}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#id ServerlessapplicationrepositoryCloudformationStack#id}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.parameters">parameters</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#parameters ServerlessapplicationrepositoryCloudformationStack#parameters}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.semanticVersion">semanticVersion</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#semantic_version ServerlessapplicationrepositoryCloudformationStack#semantic_version}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.tags">tags</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#tags ServerlessapplicationrepositoryCloudformationStack#tags}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.tagsAll">tagsAll</a></code> | <code>{[ key: string ]: string}</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#tags_all ServerlessapplicationrepositoryCloudformationStack#tags_all}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktf.SSHProvisionerConnection | cdktf.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.count"></a>

```typescript
public readonly count: number;
```

- *Type:* number

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktf.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.provisioners"></a>

```typescript
public readonly provisioners: FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner[];
```

- *Type:* cdktf.FileProvisioner | cdktf.LocalExecProvisioner | cdktf.RemoteExecProvisioner[]

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.applicationId"></a>

```typescript
public readonly applicationId: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#application_id ServerlessapplicationrepositoryCloudformationStack#application_id}.

---

##### `capabilities`<sup>Required</sup> <a name="capabilities" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.capabilities"></a>

```typescript
public readonly capabilities: string[];
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#capabilities ServerlessapplicationrepositoryCloudformationStack#capabilities}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#name ServerlessapplicationrepositoryCloudformationStack#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#id ServerlessapplicationrepositoryCloudformationStack#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.parameters"></a>

```typescript
public readonly parameters: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#parameters ServerlessapplicationrepositoryCloudformationStack#parameters}.

---

##### `semanticVersion`<sup>Optional</sup> <a name="semanticVersion" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.semanticVersion"></a>

```typescript
public readonly semanticVersion: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#semantic_version ServerlessapplicationrepositoryCloudformationStack#semantic_version}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.tags"></a>

```typescript
public readonly tags: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#tags ServerlessapplicationrepositoryCloudformationStack#tags}.

---

##### `tagsAll`<sup>Optional</sup> <a name="tagsAll" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.tagsAll"></a>

```typescript
public readonly tagsAll: {[ key: string ]: string};
```

- *Type:* {[ key: string ]: string}

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#tags_all ServerlessapplicationrepositoryCloudformationStack#tags_all}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackConfig.property.timeouts"></a>

```typescript
public readonly timeouts: ServerlessapplicationrepositoryCloudformationStackTimeouts;
```

- *Type:* <a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#timeouts ServerlessapplicationrepositoryCloudformationStack#timeouts}

---

### ServerlessapplicationrepositoryCloudformationStackTimeouts <a name="ServerlessapplicationrepositoryCloudformationStackTimeouts" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.Initializer"></a>

```typescript
import { serverlessapplicationrepositoryCloudformationStack } from '@cdktf/provider-aws'

const serverlessapplicationrepositoryCloudformationStackTimeouts: serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.create">create</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#create ServerlessapplicationrepositoryCloudformationStack#create}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.delete">delete</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#delete ServerlessapplicationrepositoryCloudformationStack#delete}. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.update">update</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#update ServerlessapplicationrepositoryCloudformationStack#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#create ServerlessapplicationrepositoryCloudformationStack#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#delete ServerlessapplicationrepositoryCloudformationStack#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/aws/r/serverlessapplicationrepository_cloudformation_stack#update ServerlessapplicationrepositoryCloudformationStack#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference <a name="ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer"></a>

```typescript
import { serverlessapplicationrepositoryCloudformationStack } from '@cdktf/provider-aws'

new serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `toString` <a name="toString" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetCreate"></a>

```typescript
public resetCreate(): void
```

##### `resetDelete` <a name="resetDelete" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetDelete"></a>

```typescript
public resetDelete(): void
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.resetUpdate"></a>

```typescript
public resetUpdate(): void
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.create">create</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.delete">delete</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.update">update</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a> \| cdktf.IResolvable</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.createInput"></a>

```typescript
public readonly createInput: string;
```

- *Type:* string

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.deleteInput"></a>

```typescript
public readonly deleteInput: string;
```

- *Type:* string

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.updateInput"></a>

```typescript
public readonly updateInput: string;
```

- *Type:* string

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.create"></a>

```typescript
public readonly create: string;
```

- *Type:* string

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.delete"></a>

```typescript
public readonly delete: string;
```

- *Type:* string

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.update"></a>

```typescript
public readonly update: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeoutsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: ServerlessapplicationrepositoryCloudformationStackTimeouts | IResolvable;
```

- *Type:* <a href="#@cdktf/provider-aws.serverlessapplicationrepositoryCloudformationStack.ServerlessapplicationrepositoryCloudformationStackTimeouts">ServerlessapplicationrepositoryCloudformationStackTimeouts</a> | cdktf.IResolvable

---



